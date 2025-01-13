import React, { useEffect } from 'react';
import styles from './Styles/About.module.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const About = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const textElement = document.querySelector(
			`.${styles.dataWrapper} p`
		);
		const words = textElement.innerText.split(' ');
		textElement.innerHTML = words
			.map((word) => `<span>${word}</span>`)
			.join(' ');

		gsap.fromTo(
			`.${styles.dataWrapper} p span`,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 4.5,
				stagger: 0.5,
				scrollTrigger: {
					trigger: `.${styles.dataWrapper}`,
					start: 'top 70%',
					end: 'bottom 85%',
					scrub: true,
					markers: false,
				},
				ease: 'power4.out',
			}
		);

		const aboutMeText = document.querySelector(
			`.${styles.heading} h2`
		);
		const letters = aboutMeText.innerText.split('');
		aboutMeText.innerHTML = letters
			.map((letter) => `<span>${letter}</span>`)
			.join('');

		gsap.fromTo(
			`.${styles.heading} h2 span`, // Target each letter
			{
				opacity: 0, // Start hidden
				y: 100, // Start slightly below
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.3,
				stagger: 0.02,
				scrollTrigger: {
					trigger: `.${styles.heading}`,
					start: 'top 65%',
					end: 'top 20%',
					scrub: true,
				},
				ease: 'expo.out',
			}
		);

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
			ease: 'power4.out',
		});
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>ABOUT ME</h2>
			</div>
			<div className={styles.smallInfo}>
				<p>Know more about me</p>
				<IoIosArrowRoundForward />
			</div>
			<div className={styles.dataWrapper}>
				<p>
					I am a passionate Full-Stack Web Developer
					with a specialization in Data Science. While
					my primary focus lies in full-stack web
					development, I have acquired a solid
					foundation in data science, which allows me
					to integrate data-driven insights into web
					applications to improve user experience and
					functionality. I thrive on designing and
					building responsive, visually engaging
					websites that not only meet the needs of
					users but also deliver seamless, dynamic
					experiences. My interest in web development
					extends across the entire stack, from
					crafting intuitive front-end interfaces to
					developing efficient back-end systems. I
					enjoy working with modern frameworks and
					technologies, such as React, Node.js, and
					Express, and am always eager to expand my
					skill set by exploring new tools and
					methodologies. Whether it's creating stunning
					user interfaces or optimizing back-end
					processes, I am passionate about writing
					clean, scalable, and maintainable code that
					brings ideas to life. I am continuously
					exploring new ways to enhance my skills and
					stay current with industry trends. I actively
					participate in open-source projects and
					collaborate with fellow developers to refine
					my abilities and tackle challenging problems.
					The collaborative nature of web development
					excites me, as it provides opportunities to
					learn from others, share knowledge, and
					contribute to meaningful projects. Driven by
					a strong desire to learn and grow, I am
					always seeking new opportunities to apply my
					full-stack development skills to innovative
					projects. I am excited to take on new
					challenges, create impactful web solutions,
					and contribute to the development of
					cutting-edge technologies that shape the
					future of the web.
				</p>
			</div>
		</div>
	);
};

export default About;
