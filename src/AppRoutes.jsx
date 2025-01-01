import React, {
	useState,
	useEffect,
} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Preloader from './Components/Preloader/Preloader';
import Postdetails from './Components/ProjectDetails/Postdetails';
import Transition from './Components/Transition';
import ScrollToTop from './Components/ScrollToTop';

import './index.css';

const AppRoutes = () => {
	const [showPreloader, setShowPreloader] =
		useState(true);

	useEffect(() => {
		const navigationType =
			window.performance.getEntriesByType(
				'navigation'
			)[0]?.type;

		if (
			navigationType === 'reload' ||
			navigationType === 'navigate'
		) {
			setShowPreloader(true);
			const timer = setTimeout(
				() => setShowPreloader(false),
				2000
			);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			<Toaster />
			<AnimatePresence mode='wait'>
				{showPreloader ? (
					<Transition key='preloader'>
						<Preloader />
					</Transition>
				) : (
					<Router>
						<ScrollToTop />
						<AnimatedRoutes />
					</Router>
				)}
			</AnimatePresence>
		</>
	);
};

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path='/'
					element={
						<Transition>
							<Home />
						</Transition>
					}
				/>
				<Route
					path='/projects/:id'
					element={
						<Transition>
							<Postdetails />
						</Transition>
					}
				/>
				<Route
					path='*'
					element={
						<Transition>
							<Notfound />
						</Transition>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default AppRoutes;
