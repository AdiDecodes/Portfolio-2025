import React, {
	useState,
	useEffect,
} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigationType,
} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import { Toaster } from 'react-hot-toast';
import Preloader from './Components/Preloader/Preloader';
import Postdetails from './Components/ProjectDetails/Postdetails';
import './index.css';

const AppRoutes = () => {
	const [showPreloader, setShowPreloader] =
		useState(true);

	useEffect(() => {
		// Check if the page is loaded directly
		const navigationType =
			window.performance.getEntriesByType(
				'navigation'
			)[0]?.type;

		if (
			navigationType === 'reload' ||
			navigationType === 'navigate'
		) {
			setShowPreloader(true);
			const timer = setTimeout(() => {
				setShowPreloader(false);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			<Toaster />
			{showPreloader ? (
				<Preloader />
			) : (
				<Router>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
						<Route
							path='/projects/:id'
							element={<Postdetails />}
						/>
						<Route
							path='*'
							element={<Notfound />}
						/>
					</Routes>
				</Router>
			)}
		</>
	);
};

export default AppRoutes;
