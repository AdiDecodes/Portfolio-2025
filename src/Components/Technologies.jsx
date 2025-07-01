import React, {
	useState,
	useEffect,
} from 'react';
import styles from './Styles/Technologies.module.scss';
import {
	GoArrowRight,
	GoHeartFill,
} from 'react-icons/go';
import Modal from './Modal/Modal.jsx';
import js from '../assets/HoverIcons/js.svg';
import react from '../assets/HoverIcons/react.svg';
import gsapIcon from '../assets/HoverIcons/gsap.svg';
import framer from '../assets/HoverIcons/framer.svg';
import tailwind from '../assets/HoverIcons/tailwind.svg';
import node from '../assets/HoverIcons/node.svg';
import express from '../assets/HoverIcons/express.svg';
import mongo from '../assets/HoverIcons/mongo.svg';
import redis from '../assets/HoverIcons/redis.svg';
import docker from '../assets/HoverIcons/docker.svg';
import typescript from '../assets/HoverIcons/typescript.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Technologies = () => {
	const [technologies] = useState([
		{
			id: 1,
			name: 'JavaScript',
			url: 'https://www.w3schools.com/js/',
			image: js,
		},
		{
			id: 2,
			name: 'TypeScript',
			url: 'https://www.typescriptlang.org/',
			image: typescript,
		},
		{
			id: 3,
			name: 'React.js',
			url: 'https://reactjs.org/',
			image: react,
		},
		{
			id: 4,
			name: 'GSAP',
			url: 'https://greensock.com/gsap/',
			image: gsapIcon,
		},
		{
			id: 5,
			name: 'Framer Motion',
			url: 'https://www.framer.com/motion/',
			image: framer,
		},
		{
			id: 6,
			name: 'Tailwind CSS',
			url: 'https://tailwindcss.com/',
			image: tailwind,
		},
		{
			id: 7,
			name: 'Node.js',
			url: 'https://nodejs.org/',
			image: node,
		},
		{
			id: 8,
			name: 'Express.js',
			url: 'https://expressjs.com/',
			image: express,
		},
		{
			id: 9,
			name: 'MongoDB',
			url: 'https://www.mongodb.com/',
			image: mongo,
		},
		{
			id: 10,
			name: 'Redis',
			url: 'https://redis.io/',
			image: redis,
		},
		{
			id: 11,
			name: 'Docker',
			url: 'https://www.docker.com/',
			image: docker,
		},
	]);

	const [currentHovered, setCurrentHovered] =
		useState(null);

	const [modal, setModal] = useState({
		active: false,
		index: 0,
	});

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const aboutMeText = document.querySelector(
			`.${styles.titleWrapper} h2`
		);
		const letters = aboutMeText.innerText.split('');
		aboutMeText.innerHTML = letters
			.map((letter) => `<span>${letter}</span>`)
			.join('');

		// Animate each letter with GSAP
		gsap.fromTo(
			`.${styles.titleWrapper} h2 span`,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.3,
				stagger: 0.02,
				scrollTrigger: {
					trigger: `.${styles.titleWrapper}`,
					start: 'top 65%',
					end: 'top 20%',
					scrub: true,
				},
				ease: 'expo.out',
			}
		);

		const items = gsap.utils.toArray(
			`.${styles.itemWrapper} div`
		);

		items.forEach((item) => {
			gsap.fromTo(
				item,
				{
					opacity: 0,
					y: 30,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					stagger: 0.08,
					scrollTrigger: {
						trigger: item,
						start: 'top 70%',
						end: 'top 10%',
						markers: false,
						scrub: true,
					},
					ease: 'expo.out',
				}
			);
		});

		gsap.from(`.${styles.smallInfo}`, {
			opacity: 0,
			y: 20,
			x: 20,
			duration: 1,
			scrollTrigger: {
				trigger: `.${styles.smallInfo}`,
				start: 'top 90%',
				end: 'bottom 85%',
				scrub: true,
			},
		});
	}, []);

	const getDeviceType = () => {
		const width = window.innerWidth;
		if (width > 1200) return 'desktop';
		if (width > 768) return 'tablet';
		return 'mobile';
	};

	return (
		<div className={styles.main}>
			<div className={styles.titleWrapper}>
				<h2 className='title'>TECHSTACK</h2>
			</div>
			<div className={styles.smallInfo}>
				<p>Know more about me</p>
			</div>
			<div className={styles.itemWrapper}>
				{technologies.map((technology, index) => (
					<div
						key={technology.id}
						data-hide-cursor='true'
						onMouseEnter={() => {
							if (getDeviceType() === 'desktop') {
								setModal({ active: true, index });
							}
						}}
						onMouseLeave={() => {
							setModal({ active: false, index });
						}}
						className={
							modal.index !== index
								? `${styles.item}`
								: `${styles.item} ${styles.itemHover}`
						}
						onFocus={(e) => {
							if (
								getDeviceType() === 'mobile' ||
								getDeviceType() === 'tablet'
							) {
								e.preventDefault();
							}
						}}
					>
						<h6>
							{technology.name}{' '}
							{currentHovered === technology.id ? (
								<GoHeartFill
									className={styles.activeHeart}
								/>
							) : (
								<GoHeartFill
									className={styles.inactiveHeart}
								/>
							)}
						</h6>
						<div className={styles.icon}>
							<GoArrowRight />
							<img
								src={technology.image}
								alt={technology.name}
								onFocus={(e) => {
									e.preventDefault();
								}}
							/>
						</div>
					</div>
				))}
			</div>
			<Modal
				modal={modal}
				projects={technologies}
			/>
		</div>
	);
};

export default Technologies;
