import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Preloader.module.scss';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Preloader = ({ completed }) => {
	const loaderRef = useRef(null);
	const mainRef = useRef(null);
	const [percentage, setPercentage] = useState(0);

	const increaseCounter = () => {
		setPercentage((prevPercentage) => {
			if (prevPercentage < 100) {
				return Math.min(prevPercentage + 2, 100);
			}
			return prevPercentage;
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			increaseCounter();
		}, 25);

		return () => clearInterval(interval);
	}, [percentage]);

	useEffect(() => {
		gsap.to(loaderRef.current, {
			duration: 2,
			scaleY: percentage / 2.5,
			ease: 'none',
		});
	}, [percentage]);

	useGSAP(() => {
		if (percentage == 100) {
			gsap.to(mainRef.current, {
				opacity: 0,
				duration: 1,
				delay: 1,
				zIndex: -1,
				ease: 'power4.out',
				onComplete: () => {
					completed();
				},
			});
		}
	}, [percentage]);

	return (
		<div
			ref={mainRef}
			className={styles.main}
		>
			<div className={styles.parentHolder}>
				<p>{percentage}%</p>
				<div
					className={styles.verticalBar}
					ref={loaderRef}
				></div>
			</div>
		</div>
	);
};

export default Preloader;
