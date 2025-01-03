import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from '../Styles/Home.module.scss';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from '../Components/Hero';
import BottomBar from '../Components/BottomBar';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import CustomCursor from '../Components/Cursor.jsx';
import TopBar from '../Components/TopBar.jsx';
import Project from '../Components/Projects/Project.jsx';
import Course from '../Components/Courses/Course.jsx';
import Contact from '../Components/Contact/Contact.jsx';
import Social from '../Components/Social/Social.jsx';
import { RiMenuLine } from 'react-icons/ri';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import { SiBuymeacoffee } from 'react-icons/si';

const Home = () => {
	const [showMenu, setShowMenu] = useState(false);

	const heroRef = useRef(null);
	const aboutRef = useRef(null);
	const technologiesRef = useRef(null);
	const projectRef = useRef(null);
	const courseRef = useRef(null);
	const socialRef = useRef(null);
	const contactRef = useRef(null);

	const scrollRef = useRef(null);
	const [scrollProgress, setScrollProgress] =
		useState(0);

	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			smoothMobile: true,
		});

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrollPercent =
				(scrollTop / docHeight) * 100;

			setScrollProgress(scrollPercent);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			locomotiveScroll.destroy();
			window.removeEventListener(
				'scroll',
				handleScroll
			);
		};
	}, []);

	useGSAP(
		() => {
			if (!showMenu) return;
			const tl = gsap.timeline();
			const el = document.querySelectorAll(
				`.${styles.menuWrapper} > *`
			);

			tl.from(el, {
				opacity: 0,
				y: 50,
				delay: 1,
				stagger: 0.1,
			});
		},
		{
			dependencies: [showMenu],
		}
	);

	const openMenu = () => {
		setShowMenu(true);
	};

	const closeMenu = () => {
		const tl = gsap.timeline();
		const el = document.querySelectorAll(
			`.${styles.menuWrapper} > *`
		);

		tl.to(el, {
			opacity: 0,
			y: 50,
			stagger: 0.1,
			onComplete: () => setShowMenu(false),
		});
	};

	return (
		<div
			className={styles.main}
			ref={scrollRef}
		>
			<CustomCursor />
			<TopBar />
			<AnimatePresence mode='popLayout'>
				{showMenu && (
					<motion.div
						initial={{
							opacity: 0,
							x: '-100%',
						}}
						animate={{
							opacity: 1,
							x: 0,
						}}
						exit={{
							opacity: 0,
							x: '-100%',
						}}
						transition={{
							duration: 0.5,
						}}
						className={styles.menuWrapper}
					>
						<p
							onClick={() => {
								heroRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							ABOUT ME
						</p>
						<p
							onClick={() => {
								aboutRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							ABOUT
						</p>
						<p
							onClick={() => {
								technologiesRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							TECHNOLOGIES
						</p>
						<p
							onClick={() => {
								projectRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							PROJECTS
						</p>
						{/* <p
					onClick={() => {
						courseRef.current.scrollIntoView({
							behavior: 'smooth',
							});
							}}
							>
							COURSES
							</p> */}
						<p
							onClick={() => {
								socialRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							SOCIAL
						</p>
						<p
							onClick={() => {
								contactRef.current.scrollIntoView({
									behavior: 'smooth',
								});
								setShowMenu(false);
							}}
						>
							CONTACT
						</p>
						<div className={styles.line}></div>
						<div className={styles.contact}>
							<div
								className={styles.item}
								onClick={() =>
									window.open(
										'mailto:singhaditya1826@gmail.com'
									)
								}
							>
								<span>singhaditya1826@gmail.com</span>
							</div>
							<div
								className={styles.item}
								onClick={() =>
									window.open(
										'https://www.buymeacoffee.com/adidecodes',
										'_blank'
									)
								}
							>
								<p>Buy me a Coffee</p>
								<SiBuymeacoffee />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div
				className={styles.menu}
				onClick={() =>
					showMenu ? closeMenu() : openMenu()
				}
			>
				<RiMenuLine />
			</div>
			<div ref={heroRef}>
				<Hero />
			</div>
			<div ref={aboutRef}>
				<About />
			</div>
			<div ref={technologiesRef}>
				<Technologies />
			</div>
			<div ref={projectRef}>
				<Project />
			</div>
			{/* <div ref={courseRef}>
				<Course />
			</div> */}
			<div ref={socialRef}>
				<Social />
			</div>
			<div ref={contactRef}>
				<Contact />
			</div>
			<BottomBar
				progress={scrollProgress}
				sections={{
					hero: heroRef,
					about: aboutRef,
					technologies: technologiesRef,
					project: projectRef,
					// course: courseRef,
					social: socialRef,
					contact: contactRef,
				}}
			/>
		</div>
	);
};

export default Home;
