import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import styles from './Projectdetails.module.scss';
import projects from './projects.js';
import {
	useParams,
	useNavigate,
} from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';
import {
	FaGithub,
	FaInstagram,
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { TbBrandVite } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaNode } from 'react-icons/fa';
import { SiRedis } from 'react-icons/si';
import { SiGreensock } from 'react-icons/si';
import { FiFramer } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaAws } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { SiCloudinary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { SiStyledcomponents } from 'react-icons/si';
import { SiRazorpay } from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiMailgun } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Postdetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [project, setProject] = useState(null);

	useEffect(() => {
		if (!id || isNaN(id) || id > projects.length) {
			navigate('/');
		} else {
			const project = projects.find(
				(project) => project.id === parseInt(id)
			);
			setProject(project);
			console.log(project);
			// setProject(project);
		}
	}, []);

	const iconsMapping = {
		github: <FaGithub color='#181717' />, // GitHub black
		instagram: <FaInstagram color='#E4405F' />, // Instagram pink
		mongodb: <SiMongodb color='#47A248' />, // MongoDB green
		express: <SiExpress color='#ffffff' />, // Express black
		sass: <FaSass color='#CC6699' />, // Sass pink
		react: <FaReact color='#61DAFB' />, // React cyan
		vite: <TbBrandVite color='#646CFF' />, // Vite purple
		tailwindcss: (
			<RiTailwindCssFill color='#38BDF8' />
		), // Tailwind cyan
		nodejs: <FaNode color='#339933' />, // Node.js green
		redis: <SiRedis color='#DC382D' />, // Redis red
		gsap: <SiGreensock color='#88CE02' />, // GreenSock green
		framermotion: <FiFramer color='#0055FF' />, // Framer blue
		typescript: <SiTypescript color='#3178C6' />, // TypeScript blue
		javascript: <SiJavascript color='#F7DF1E' />, // JavaScript yellow
		aws: <FaAws color='#FF9900' />, // AWS orange
		googlecloud: <SiGooglecloud color='#4285F4' />, // Google Cloud blue
		cloudinary: <SiCloudinary color='#818181' />, // Cloudinary grey
		nextjs: <RiNextjsFill color='#000000' />, // Next.js black
		styledcomponents: (
			<SiStyledcomponents color='#DB7093' />
		), // Styled Components pink
		razorpay: <SiRazorpay color='#505050' />, // Razorpay grey
		socketio: <TbBrandSocketIo color='#ffffff' />, // Socket.io black
		html: <FaHtml5 color='#E34F26' />, // HTML5 orange
		css: <FaCss3 color='#1572B6' />, // CSS3 blue
		mailgun: <SiMailgun color='#EA4C89' />, // Mailgun pink
		api: <TbApi color='#646CFF' />, // API purple
	};

	const handleIconMapping = (tech) => {
		const iconName = tech
			.toLowerCase()
			.replace(' ', '')
			.replace('.', '');
		console.log(iconName);
		for (const key in iconsMapping) {
			if (
				key == iconName ||
				iconName.includes(key)
			) {
				return iconsMapping[key];
			}
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				{project?.image.map((image) => (
					<div className={styles.imageWrapper}>
						<img
							src={image}
							alt='project'
							className={styles.image}
						/>
					</div>
				))}
			</div>
			<div className={styles.right}>
				<div className={styles.itemInline}>
					<div
						className={styles.back}
						onClick={() => navigate('/')}
					>
						<IoMdArrowRoundBack />
					</div>
					<h2>{project?.name}</h2>
				</div>

				<p>{project?.description}</p>
				<div className={styles.item}>
					<h3>My Involvement</h3>
					<p>{project?.myInvolvement}</p>
				</div>
				<div className={styles.techStack}>
					<h3>Tech Stack Used</h3>
					<div className={styles.techStackWrapper}>
						{project?.techStack.map((tech) => (
							<div
								key={tech}
								className={styles.tech}
							>
								{handleIconMapping(tech)}
								<p>{tech}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.dateTimeline}>
					<div className={styles.date}>
						<p>{project?.dateStarted}</p>
					</div>
					<div className={styles.line}></div>
					<div className={styles.date}>
						<p>{project?.dateCompleted}</p>
					</div>
				</div>
				<div className={styles.urlWrapper}>
					{project?.urls.map((url) => (
						<div
							key={url.name}
							className={styles.url}
							onClick={() => {
								window.open(url.url, '_blank');
							}}
						>
							<p>{url.name}.</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Postdetails;
