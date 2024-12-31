import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from './Styles/TopBar.module.scss';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { showToast } from './Utils/toast';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const TopBar = () => {
	const [time, setTime] = useState('');
	const email = 'singhaditya1826@gmail.com';

	const nameRef = useRef(null);
	const timeRef = useRef(null);
	const contactRef = useRef(null);

	const getTime = () => {
		const date = new Date();
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		const strTime = `${hours
			.toString()
			.padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')} ${ampm}`;
		setTime(strTime);
	};

	useEffect(() => {
		getTime();
		const now = new Date();
		const delay =
			(60 - now.getSeconds()) * 1000 -
			now.getMilliseconds();

		const timeout = setTimeout(() => {
			getTime();
			const interval = setInterval(getTime, 60000); // Update every minute
			return () => clearInterval(interval); // Cleanup interval on unmount
		}, delay);

		return () => clearTimeout(timeout); // Cleanup timeout on unmount
	}, []);

	const copyEmail = (email) => {
		navigator.clipboard
			.writeText(email)
			.then(() => {
				showToast('Copied!', 'success');
			})
			.catch(() => {
				showToast('Unable to Copy!', 'error');
			});
	};

	useGSAP(() => {
		const itemsArray = [
			nameRef.current,
			timeRef.current,
			contactRef.current,
		];
		gsap.from(itemsArray, {
			delay: 2.5,
			opacity: 0,
			ease: 'power3.inOut',
			y: -50,
			stagger: 0.1,
			duration: 1,
		});
	});

	return (
		<div className={styles.main}>
			<p ref={nameRef}>ADITYA SINGH .</p>
			<div
				className={styles.time}
				ref={timeRef}
			>
				<p>{time}</p>
			</div>
			<div
				className={styles.contact}
				ref={contactRef}
			>
				<p>say hi</p>
				<MdOutlineArrowRightAlt />
				<p
					onClick={() => {
						copyEmail(email);
					}}
				>
					{email}
				</p>
			</div>
		</div>
	);
};

export default TopBar;
