import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Contact.module.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import { GoHeartFill } from 'react-icons/go';
import { showToast } from '../Utils/toast';
import { sendMail } from '../../mail';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
	const [tags, setTags] = useState([
		'PROJECT',
		'REDESIGN',
		'COLLABORATION',
		'OTHER',
	]);

	const [selectedTags, setSelectedTags] = useState(
		[]
	);

	const [sendButtonState, setSendButtonState] =
		useState('DEFAULT');

	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		purpose: [],
		title: '',
		message: '',
	});

	useEffect(() => {
		setContactData({
			...contactData,
			purpose: selectedTags,
		});
	}, [selectedTags]);

	const addItems = (tag) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(
				selectedTags.filter((item) => item !== tag)
			);
		} else {
			if (tag == 'OTHER') {
				setSelectedTags(['OTHER']);
				return;
			} else {
				if (selectedTags.includes('OTHER')) {
					const newTags = selectedTags.filter(
						(item) => item !== 'OTHER'
					);
					setSelectedTags([...newTags, tag]);
				} else {
					setSelectedTags([...selectedTags, tag]);
				}
			}
		}
	};

	const sendEmail = async () => {
		setSendButtonState('SENDING');

		try {
			const response = await sendMail(contactData);
			if (response.status == 'success') {
				setSendButtonState('DEFAULT');
				showToast(
					'Thank you for reaching out. I will get back to you soon.',
					'success'
				);
			}
		} catch (error) {
			console.log(error);
			setSendButtonState('DEFAULT');
			showToast(
				'Oh no! Something went wrong. Please try again later',
				'error'
			);
		}
	};

	const handleSubmit = () => {
		const validateEmail = (email) => {
			const re =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		};

		if (contactData.name === '') {
			showToast('Please enter your name', 'error');
			return;
		}
		if (contactData.email === '') {
			showToast('Please enter your email', 'error');
			return;
		}

		if (!validateEmail(contactData.email)) {
			showToast(
				'Please enter a valid email',
				'error'
			);
			return;
		}
		if (contactData.title === '') {
			showToast('Please enter your title', 'error');
			return;
		}
		if (contactData.purpose.length === 0) {
			showToast('Please select a purpose', 'error');
			return;
		}
		if (contactData.message === '') {
			showToast(
				'Please enter your message',
				'error'
			);
			return;
		}
		sendEmail();
	};

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
				y: 50, // Start slightly below
			},
			{
				opacity: 1, // Fade in the letter
				y: 0, // Move the letter to its original position
				duration: 0.3, // Duration of each letter's animation
				stagger: 0.05, // Delay each letter's animation by 0.05 seconds
				scrollTrigger: {
					trigger: `.${styles.heading}`,
					start: 'top 80%',
					end: 'top 20%',
					scrub: true,
				},
			}
		);

		gsap.from(`.${styles.smallInfo}`, {
			opacity: 0,
			y: 20,
			x: 20,
			duration: 1,
			scrollTrigger: {
				trigger: `.${styles.smallInfo}`,
				start: 'top 70%',
				end: 'top 10%',
				scrub: true,
			},
		});

		gsap.from(`.${styles.contactWrapper}`, {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: `.${styles.contactWrapper}`,
				start: 'top 70%',
				end: 'top 10%',
				scrub: true,
			},
		});
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>CONTACT</h2>
				<div className={styles.smallInfo}>
					<p>Let's Build Together</p>
					<IoIosArrowRoundForward />
				</div>
			</div>
			<div className={styles.contactWrapper}>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<p>YOUR NAME</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									name: e.target.value,
								});
							}}
						/>
					</div>
					<div className={styles.item}>
						<p>EMAIL</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									email: e.target.value,
								});
							}}
						/>
					</div>
					<div className={styles.item}>
						<p>TITLE</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									title: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<p>PURPOSE</p>
						<div className={styles.tags}>
							{tags.map((tag) => (
								<div
									className={
										selectedTags.includes(tag)
											? `${styles.tag} ${styles.tagSelected}`
											: `${styles.tag}`
									}
									data-hide-cursor='true'
									key={tag}
									onClick={() => addItems(tag)}
								>
									<p>{tag}</p>
								</div>
							))}
						</div>
					</div>
					<div className={styles.item}>
						<p>MESSAGE</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									message: e.target.value,
								});
							}}
						/>
					</div>
					<div
						className={styles.buttonSubmit}
						onClick={handleSubmit}
					>
						{sendButtonState === 'SENDING' ? (
							<>
								<p>SENDING</p>
								<div className={styles.loader}></div>
							</>
						) : (
							<>
								<p>SUBMIT.</p>
								<MdArrowOutward />
							</>
						)}
					</div>
				</div>
			</div>
			<div
				className={styles.infoSection}
				data-hide-cursor='true'
			>
				<p>MADE WITH</p>
				<div className={styles.heartIcon}>
					<GoHeartFill />
				</div>
				<p> BY ADITYA</p>
			</div>
		</div>
	);
};

export default Contact;
