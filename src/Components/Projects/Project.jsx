import React, {
	useEffect,
} from 'react';
import styles from './style.module.scss';
import techbucket from '../../assets/Projects/techbucket.png';
import cleverstudio from '../../assets/Projects/cleverstudio.png';
import peerbond from '../../assets/Projects/peerbond.png';
import igloaded from '../../assets/Projects/igloaded.png';
import vocalize from '../../assets/Projects/vocalize.png';
import farzi from '../../assets/Projects/farzi-2.png';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Project = () => {
	const projects = [
		{
			id: 1,
			name: 'PeerBond',
			description:
				'A social media platform that connects you with your peers and helps you share your thoughts and ideas with them.',
			image: peerbond,
			year: '2024',
		},
		{
			id: 4,
			name: 'TechBucket',
			description:
				'A tech blog that provides you with the latest tech news and reviews.',
			image: techbucket,
			year: '2024',
		},
		{
			id: 3,
			name: 'Clever Studio',
			description:
				'A web development agency that provides you with the best web development services.',
			image: cleverstudio,
			year: '2024',
		},
		{
			id: 2,
			name: 'IGLoaded',
			description:
				'A web app that helps you download Instagram photos and videos.',
			image: igloaded,
			year: '2023',
		},
		{
			id: 5,
			name: 'Vocalize (Under Development)',
			description:
				'Vocalize is a web based platform that supports realtime speech translation and captions for your meeting.',
			image: vocalize,
			year: '2024',
		},
		{
			id: 6,
			name: 'Farzi.js',
			description:
				'Farzi.js is a npm package that helps you generate fake data for your projects.',
			image: farzi,
			year: '2024',
		},
	];

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const items = gsap.utils.toArray(
			'.description'
		);

		const aboutMeText = document.querySelector(
			`.${styles.heading} h2`
		);
		const letters = aboutMeText.innerText.split(''); // Split the text into letters
		aboutMeText.innerHTML = letters
			.map((letter) => `<span>${letter}</span>`)
			.join(''); // Wrap each letter in a span

		// Animate each letter with GSAP
		gsap.fromTo(
			`.${styles.heading} h2 span`, // Target each letter
			{
				opacity: 0, // Start hidden
				y: 50, // Start slightly below
			},
			{
				opacity: 1, // Fade in the letter
				y: 0, // Move the letter to its original position
				duration: 0.3, // Duration of each letter's animation
				stagger: 0.05, // Delay each letter's animation by 0.05 seconds
				scrollTrigger: {
					trigger: `.${styles.heading}`, // Trigger the animation when the heading comes into view
					start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
					end: 'top 20%', // End when the top reaches 20%
					scrub: true, // Smooth animation tied to the scroll position
				},
			}
		);

		items.forEach((item, index) => {
			gsap.from(item, {
				x: 100,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'top 50%',
					scrub: 1,
				},
			});
		});

		const projectWrapper = document.querySelector(
			`.${styles.projectWrapper}`
		);
		const children = Array.from(
			projectWrapper.children
		);

		children.forEach((project, index) => {
			if (index % 2 === 0) {
				gsap.from(project, {
					x: -100,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: project,
						start: 'top 80%',
						end: 'top 50%',
						scrub: 1,
					},
				});
			} else {
				gsap.from(project, {
					x: 100,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: project,
						start: 'top 80%',
						end: 'top 50%',
						scrub: 1,
					},
				});
			}
		});
	}, []);
	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2 className='title'>PROJECTS</h2>
				<p className='description'>
					A LIST OF OG PROJECTS
				</p>
			</div>
			<div className={styles.projectWrapper}>
				{projects
					.sort((a, b) => a.id - b.id)
					.map((project) => (
						<div
							key={project.id}
							className={styles.project}
						>
							<div className={styles.imageWrapper}>
								<img
									src={project.image}
									alt={project.name}
								/>
							</div>
							<div className={styles.bottom}>
								<Link to={`/projects/${project.id}`}>
									{project.name}
								</Link>
								<p>{project.year}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Project;
