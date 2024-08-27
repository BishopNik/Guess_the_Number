/** @format */

import { toast } from 'react-toastify';

export function toastWindowError(mes) {
	toast.error(mes, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	});
}

export function toastStop(mes) {
	toast.error(mes, {
		icon: '❌',
	});
}

export function toastStart(mes) {
	toast.success(mes, {
		icon: '✅',
	});
}
