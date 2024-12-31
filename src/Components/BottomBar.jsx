import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import styles from './Styles/BottomBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const BottomBar = ({ progress, sections }) => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] =
		useState(false);
	const bottomBarRef = useRef(null);

	const navigateToSection = (sectionRef) => {
		sectionRef.current.scrollIntoView({
			behavior: 'smooth',
		});
	};

	useGSAP(
		() => {
			if (isVisible) {
				gsap.to(bottomBarRef.current, {
					y: 0,
					opacity: 1,
					duration: 0.25,
					ease: 'bounce.in',
					bottom: '2rem',
				});
			} else {
				gsap.to(bottomBarRef.current, {
					y: 100,
					opacity: 0,
					duration: 0.25,
					bottom: '-2rem',
					ease: 'bounce.out',
				});
			}
		},
		{
			dependencies: [isVisible],
		}
	);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 0) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener(
				'scroll',
				handleScroll
			);
		};
	}, []);

	return (
		<div
			className={styles.main}
			ref={bottomBarRef}
		>
			<div
				className={styles.progressBar}
				style={{ width: `${progress}%` }}
			></div>
			<div className={styles.copyright}>
				<p
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}
				>
					ADITYA SINGH
				</p>
			</div>
			<div className={styles.divs}>
				<div
					onClick={() => {
						navigateToSection(sections.about);
					}}
				>
					ABOUT ME
				</div>
				<div
					onClick={() => {
						navigateToSection(sections.technologies);
					}}
				>
					TECHSTACK
				</div>
				<div
					onClick={() => {
						navigateToSection(sections.project);
					}}
				>
					PROJECTS
				</div>
				{/* <div
					onClick={() => {
						navigateToSection(sections.course);
					}}
				>
					COURSES
				</div> */}
				<div
					onClick={() => {
						navigateToSection(sections.social);
					}}
				>
					SOCIAL
				</div>
				<div
					onClick={() => {
						navigateToSection(sections.contact);
					}}
				>
					CONTACT
				</div>
			</div>
		</div>
	);
};

export default BottomBar;
