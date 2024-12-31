import toast from 'react-hot-toast';
import styles from './toast.module.scss';

const toastProps = {
	duration: 4000,
	position: 'top-right',
	className: styles.toast,
};

export const showToast = (message, type) => {
	switch (type) {
		case 'success':
			toast.success(message, toastProps);
			break;
		case 'error':
			toast.error(message, toastProps);
			break;
		case 'loading':
			toast.loading(message, toastProps);
			break;
		default:
			toast(message, toastProps);
	}
};
