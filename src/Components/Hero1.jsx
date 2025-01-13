import React, { useRef } from 'react';
import styles from './Styles/Hero.module.scss';
import gsap from 'gsap';
import male from '../assets/img.png';
import bg1 from '../assets/bg-1.svg';
import bg2 from '../assets/bg-2.svg';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

const Hero = () => {
	const leftref = useRef(null);
	const rightref = useRef(null);
	const imageref = useRef(null);

	useGSAP(() => {
		const text1 = SplitType.create('#text1');
		const text2 = SplitType.create('#text2');
		const text3 = SplitType.create('#text3');

		const t1 = gsap.timeline();
		t1
			.to(
				leftref.current,
				{
					scaleX: 0,
					transformOrigin: 'right',
					duration: 0.75,
					ease: 'power3.inOut',
				},
				0.5
			)
			.to(
				rightref.current,
				{
					scaleX: 0,
					transformOrigin: 'left',
					duration: 0.75,
					ease: 'power3.inOut',
				},
				0.5
			)
			.from(
				imageref.current.children[1],
				{
					opacity: 0,
					transform: 'rotate(-70deg)',
					scale: 0,
					duration: 1,
				},
				1
			)
			.from(
				imageref.current.children[2],
				{
					opacity: 0,
					transform: 'rotate(-70deg)',
					scale: 0,
					duration: 1,
				},
				1.3
			)
			.from(
				text1.chars,
				{
					opacity: 0,
					y: 50,
					duration: 0.75,
					stagger: 0.05,
				},
				1.5 // Starts right after the images appear
			)
			.from(
				text2.chars,
				{
					opacity: 0,
					y: 50,
					duration: 0.75,
					stagger: 0.05,
				},
				2.3 // Starts after the first text animation finishes
			)
			.from(
				text3.chars,
				{
					opacity: 0,
					y: 50,
					duration: 0.75,
					stagger: 0.05,
				},
				3 // Starts after the second text animation finishes
			);
	});

	return (
		<div className={styles.main}>
			<div
				className={styles.imageSection}
				ref={imageref}
			>
				<div className={styles.image}>
					<img
						src={male}
						alt=''
					/>
					<div
						className={styles.cover}
						ref={leftref}
					></div>
					<div
						className={styles.cover}
						ref={rightref}
					></div>
				</div>
				<div className={styles.image}>
					<img
						src={bg1}
						alt=''
					/>
				</div>
				<div className={styles.image}>
					<img
						src={bg2}
						alt=''
					/>
				</div>
			</div>
			<div className={styles.textSection}>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<h1 id='text1'>HELLO, I'M</h1>
				</div>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<p id='text2'>ADITYA</p>
				</div>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<p id='text3'>SINGH</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
