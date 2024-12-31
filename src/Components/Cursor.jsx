import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import { gsap } from 'gsap';
import './Styles/Customcursor.css';

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const followerRef = useRef(null);
	const [isHovering, setIsHovering] =
		useState(false);
	const [isCursorVisible, setIsCursorVisible] =
		useState(true);

	const hideCursor = () => {
		gsap.to(cursorRef.current, {
			opacity: 0,
			duration: 0.2,
		});
		gsap.to(followerRef.current, {
			opacity: 0,
			duration: 0.2,
		});
	};

	const showCursor = () => {
		gsap.to(cursorRef.current, {
			opacity: 1,
			duration: 0.2,
		});
		gsap.to(followerRef.current, {
			opacity: 1,
			duration: 0.2,
		});
	};

	useEffect(() => {
		if (!isCursorVisible) {
			hideCursor();
		} else {
			showCursor();
		}
	}, [isCursorVisible]);

	useEffect(() => {
		const handleMouseMove = (e) => {
			gsap.to(cursorRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0,
			});
			gsap.to(followerRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.2,
				scale: isHovering ? 2 : 1,
			});
		};

		const handleMouseEnter = (e) => {
			setIsHovering(true);
		};

		const handleMouseLeave = () => {
			setIsHovering(false);
		};

		window.addEventListener(
			'mousemove',
			handleMouseMove
		);

		const checkCursorVisibility = (e) => {
			const elements = document.querySelectorAll(
				'[data-hide-cursor="true"]'
			);
			let isVisible = true;
			elements.forEach((element) => {
				if (element.contains(e.target)) {
					isVisible = false;
				}
			});
			setIsCursorVisible(isVisible);
		};

		const handleMouseDown = () => {
			gsap.to(cursorRef.current, {
				scale: 1.5,
				duration: 0.2,
			});
			gsap.to(followerRef.current, {
				scale: 1.5,
				duration: 0.2,
			});
		};

		const handleMouseUp = () => {
			gsap.to(cursorRef.current, {
				scale: 1,
				duration: 0.2,
			});
			gsap.to(followerRef.current, {
				scale: 1,
				duration: 0.2,
			});
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				gsap.to(cursorRef.current, {
					opacity: 0,
					duration: 0.2,
				});
				gsap.to(followerRef.current, {
					opacity: 0,
					duration: 0.2,
				});
			} else {
				gsap.to(cursorRef.current, {
					opacity: 1,
					duration: 0.2,
				});
				gsap.to(followerRef.current, {
					opacity: 1,
					duration: 0.2,
				});
			}
		};

		window.addEventListener(
			'mousemove',
			handleMouseMove
		);
		window.addEventListener(
			'mouseup',
			handleMouseUp
		);
		window.addEventListener(
			'mousedown',
			handleMouseDown
		);
		window.addEventListener(
			'mousemove',
			checkCursorVisibility
		);
		document.addEventListener(
			'visibilitychange',
			handleVisibilityChange
		);

		const textElements = document.querySelectorAll(
			'p, h1, h2, h3, h4, h5, a'
		);
		textElements.forEach((el) => {
			el.addEventListener(
				'mouseenter',
				handleMouseEnter
			);
			el.addEventListener(
				'mouseleave',
				handleMouseLeave
			);
		});

		return () => {
			window.removeEventListener(
				'mousemove',
				handleMouseMove
			);
			window.removeEventListener(
				'mouseup',
				handleMouseUp
			);
			window.removeEventListener(
				'mousedown',
				handleMouseDown
			);
			window.removeEventListener(
				'mousemove',
				checkCursorVisibility
			);
			textElements.forEach((el) => {
				el.removeEventListener(
					'mouseenter',
					handleMouseEnter
				);
				el.removeEventListener(
					'mouseleave',
					handleMouseLeave
				);
			});
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			);
		};
	}, [isHovering, isCursorVisible]);

	return (
		<>
			<div
				ref={cursorRef}
				className='custom-cursor'
				style={{ willChange: 'transform, opacity' }}
			></div>
			<div
				ref={followerRef}
				className={`cursor-follower ${
					isHovering ? 'is-hovering' : ''
				}`}
				style={{ willChange: 'transform, opacity' }}
			></div>
		</>
	);
};

export default CustomCursor;
