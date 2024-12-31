import React, { useEffect, useRef } from 'react';
import styles from './Marquee.module.scss';
import { GoNorthStar } from 'react-icons/go';
import gsap from 'gsap';

const Marquee = () => {
	const scrollDiv = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		if (scrollDiv.current && containerRef.current) {
			const marqueeWidth =
				scrollDiv.current.scrollWidth / 2;

			gsap.to(scrollDiv.current, {
				x: `-${marqueeWidth}px`,
				duration: 10,
				ease: 'linear',
				repeat: -1,
				modifiers: {
					x: gsap.utils.wrap(-marqueeWidth, 0),
				},
			});
		}
	}, []);

	return (
		<div
			className={styles.main}
			ref={containerRef}
		>
			<div
				className={styles.text}
				ref={scrollDiv}
			>
				<p>ADITYA</p>
				<GoNorthStar />
				<p>SINGH</p>
				<GoNorthStar />
				<p>ADITYA</p>
			</div>
		</div>
	);
};

export default Marquee;
