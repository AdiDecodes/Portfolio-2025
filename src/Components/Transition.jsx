import React from 'react';
import { motion } from 'framer-motion';

const Transition = ({ children }) => {
	// Animation variants
	const pageVariants = {
		initial: { opacity: 0, y: '50px' }, // Start slightly lower for smoother animation
		animate: { opacity: 1, y: '0px' },
		exit: { opacity: 0, y: '-50px' }, // Exit slightly upwards
	};

	// Animation timing
	const pageTransition = {
		duration: 0.7,
		ease: [0.25, 0.8, 0.25, 1], // Custom easing for smoothness
	};

	return (
		<motion.div
			initial='initial'
			animate='animate'
			exit='exit'
			variants={pageVariants}
			transition={pageTransition}
			style={{
				position: 'relative',
				overflow: 'hidden',
			}} // Prevents scrolling issues
		>
			{children}
		</motion.div>
	);
};

export default Transition;
