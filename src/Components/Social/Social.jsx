import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Social.module.scss';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CiCoffeeCup } from 'react-icons/ci';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const Social = () => {
	const [socials, setSocials] = useState([
		{
			id: 1,
			icon: <FaGithub />,
			name: 'Github.',
			link: 'https://www.github.com/adidecodes',
			// images: [github1, github2, github3, github4],
		},
		{
			id: 2,
			icon: <FaInstagram />,
			name: 'Instagram.',
			link: 'https://www.instagram.com/adit.yaml',
			// images: [insta1, insta2, insta3, insta4],
		},
		{
			id: 3,
			icon: <FaLinkedinIn />,
			name: 'LinkedIn.',
			link:
				'https://www.linkedin.com/in/singhaditya18',
		},
		{
			id: 4,
			icon: <MdEmail />,
			name: 'Email.',
			link: 'mailto:singhaditya1826@gmail.com',
			// images: [email1, email2, email3, email4],
		},
		{
			id: 5,
			icon: <CiCoffeeCup />,
			name: 'Buy Me A Coffee.',
			link:
				'https://www.buymeacoffee.com/adidecodes',
			// images: [coffee1, coffee2, coffee3, coffee4],
		},
	]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

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

		const singleItem = gsap.utils.toArray(
			`.${styles.socialItem}`
		);

		singleItem.forEach((item) => {
			gsap.fromTo(
				item,
				{
					opacity: 0,
					y: 40,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.05,
					scrollTrigger: {
						trigger: item,
						start: 'top 70%',
						end: 'top 30%',
						scrub: true,
					},
				}
			);
		});
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>SOCIALS</h2>
				<div className={styles.smallInfo}>
					<p>FOLLOW ME ON SOCIALS</p>
					<IoIosArrowRoundForward />
				</div>
			</div>
			<div className={styles.socialWrapper}>
				{socials.map((social) => {
					return (
						<div
							className={styles.socialItem}
							key={social.id}
							onClick={() => {
								window.open(social.link, '_blank');
							}}
						>
							<p>{social.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Social;
