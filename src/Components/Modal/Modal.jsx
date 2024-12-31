import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import gsap from 'gsap';

const scaleAnimation = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	enter: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: {
			duration: 0.4,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	closed: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: {
			duration: 0.4,
			ease: [0.32, 0, 0.67, 0],
		},
	},
};

export default function Modal({
	modal,
	projects,
}) {
	const { active, index } = modal;
	const modalContainer = useRef(null);

	useEffect(() => {
		//Move Container

		let xMoveContainer = gsap.quickTo(
			modalContainer.current,
			'left',
			{ duration: 0.8, ease: 'power3' }
		);

		let yMoveContainer = gsap.quickTo(
			modalContainer.current,
			'top',
			{ duration: 0.8, ease: 'power3' }
		);

		window.addEventListener('mousemove', (e) => {
			const { pageX, pageY } = e;
			xMoveContainer(pageX);
			yMoveContainer(pageY);
		});

		return () => {
			window.removeEventListener('mousemove', () => {
				xMoveContainer.kill();
				yMoveContainer.kill();
			});
		};
	}, []);

	return (
		<>
			<motion.div
				ref={modalContainer}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
				className={styles.modalContainer}
			>
				<div
					style={{ top: index * -100 + '%' }}
					className={styles.modalSlider}
				>
					{projects.map((project, index) => {
						const { image, color } = project;
						return (
							<div
								className={styles.modal}
								style={{ backgroundColor: color }}
								key={`modal_${index}`}
							>
								<img
									src={image}
									alt='image'
								/>
							</div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
}
