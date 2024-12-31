import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes.jsx';
import './index.css';
import '../src/Styles/Fonts/fonts.scss';

createRoot(
	document.getElementById('root')
).render(<AppRoutes />);
