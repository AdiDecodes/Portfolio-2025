import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes.jsx';
import './index.css';
import './Styles/Fonts/Fonts.scss';

createRoot(
	document.getElementById('root')
).render(<AppRoutes />);
