import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// Delay the scroll restoration to wait for animation
		const timer = setTimeout(() => {
			window.scrollTo(0, 0);
		}, 700); // Match the transition duration

		return () => clearTimeout(timer); // Cleanup timer
	}, [pathname]);

	return null;
};

export default ScrollToTop;
