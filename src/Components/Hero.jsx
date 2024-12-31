import React, { useEffect, useRef } from 'react';
import styles from './Styles/Hero.module.scss';
import gsap from 'gsap';
import side from '../assets/side.webp';
import male from '../assets/male.jpg';
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
				1.2
			)
			.from(
				text1.chars,
				{
					opacity: 0,
					y: 100,
					duration: 0.75,
					stagger: 0.05,
				},
				1.95
			)
			.from(
				text2.chars,
				{
					opacity: 0,
					y: 100,
					duration: 0.75,
					stagger: 0.05,
				},
				2.275
			)
			.from(
				text3.chars,
				{
					opacity: 0,
					y: 100,
					duration: 0.75,
					stagger: 0.05,
				},
				2.6
			);
	});

	return (
		<div className={styles.main}>
			{/* <div className={styles.sectionOne}>
				<div className={styles.text}>
					<p>HELLO</p>
					<span className={styles.blockWrapper}>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
					</span>
				</div>
				<div className={styles.scroller}>
					<div className={styles.linear}>
						<span className={styles.loader}></span>
					</div>
					<GoNorthStar />
					<div className={styles.linear}>
						<span className={styles.loader}></span>
					</div>
				</div>
				<div className={styles.info}>
					<p>I'M</p>
				</div>
			</div>
			<div className={styles.sectionTwo}>
				<p>ADITYA</p>
				<p>SINGH</p>
			</div>
			<div className={styles.sectionThree}>
				<div className={styles.image}>
					<img
						src={side}
						alt=''
					/>
				</div>
				<div className={styles.textRight}>
					<div className={styles.text}>
						<p>FULL STACK</p>
					</div>
					<div className={styles.text}>
						<p>DEVELOPER</p>
					</div>
				</div>
			</div> */}

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