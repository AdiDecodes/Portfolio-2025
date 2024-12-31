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
import Preloader from '../Components/Preloader/Preloader.jsx';

const Home = () => {
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

	return (
		<div
			className={styles.main}
			ref={scrollRef}
		>
			<CustomCursor />
			<TopBar />
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
