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
import graphql from '../assets/HoverIcons/graphql.svg';
import docker from '../assets/HoverIcons/docker.svg';
import kubernetes from '../assets/HoverIcons/kubernetes.svg';
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
			name: 'React.js',
			url: 'https://reactjs.org/',
			image: react,
		},
		{
			id: 3,
			name: 'GSAP',
			url: 'https://greensock.com/gsap/',
			image: gsapIcon,
		},
		{
			id: 4,
			name: 'Framer Motion',
			url: 'https://www.framer.com/motion/',
			image: framer,
		},
		{
			id: 5,
			name: 'Tailwind CSS',
			url: 'https://tailwindcss.com/',
			image: tailwind,
		},
		{
			id: 6,
			name: 'Node.js',
			url: 'https://nodejs.org/',
			image: node,
		},
		{
			id: 7,
			name: 'Express.js',
			url: 'https://expressjs.com/',
			image: express,
		},
		{
			id: 8,
			name: 'MongoDB',
			url: 'https://www.mongodb.com/',
			image: mongo,
		},
		{
			id: 9,
			name: 'Redis',
			url: 'https://redis.io/',
			image: redis,
		},
		{
			id: 10,
			name: 'GraphQL',
			url: 'https://graphql.org/',
			image: graphql,
		},
		{
			id: 11,
			name: 'Docker',
			url: 'https://www.docker.com/',
			image: docker,
		},
		{
			id: 12,
			name: 'Kubernetes',
			url: 'https://kubernetes.io/',
			image: kubernetes,
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
		const letters = aboutMeText.innerText.split(''); // Split the text into letters
		aboutMeText.innerHTML = letters
			.map((letter) => `<span>${letter}</span>`)
			.join(''); // Wrap each letter in a span

		// Animate each letter with GSAP
		gsap.fromTo(
			`.${styles.titleWrapper} h2 span`, // Target each letter
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
					trigger: `.${styles.titleWrapper}`, // Trigger the animation when the heading comes into view
					start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
					end: 'top 20%', // End when the top reaches 20%
					scrub: true, // Smooth animation tied to the scroll position
				},
			}
		);

		const textElement = document.querySelector(
			`.${styles.itemWrapper}`
		);

		// Animate each word with GSAP

		gsap.fromTo(
			`.${styles.itemWrapper} div`, // Target each word
			{
				opacity: 0, // Start hidden
				y: 20, // Start slightly below
			},
			{
				opacity: 1, // Fade in the word
				y: 0, // Move the word to its original position
				duration: 4.5, // Duration of each word's animation
				stagger: 0.5, // Delay each word's animation by 0.1 seconds
				scrollTrigger: {
					trigger: `.${styles.itemWrapper}`, // Trigger the animation when dataWrapper comes into view
					start: 'top 70%', // Trigger when the top of dataWrapper reaches 80% of the viewport height
					end: 'top 10%', // End when the top reaches 20%
					scrub: true, // Smooth animation tied to the scroll position
					markers: false, // Show markers for debugging
				},
			}
		);
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.titleWrapper}>
				<h2 className='title'>TECHSTACK</h2>
				<p className='description'>
					TECHNOLOGY I USE OFTEN
				</p>
			</div>
			<div className={styles.itemWrapper}>
				{technologies.map((technology, index) => (
					<div
						key={technology.id}
						data-hide-cursor='true'
						onMouseEnter={() => {
							setModal({ active: true, index });
						}}
						onMouseLeave={() => {
							setModal({ active: false, index });
						}}
						className={
							modal.index !== index
								? `${styles.item}`
								: `${styles.item} ${styles.itemHover}`
						}
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
