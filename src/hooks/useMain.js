/** @format */

import { useSelector } from 'react-redux';
import { isLoadingState, statusState, textState } from 'redux/selectors';

export const useMain = () => {
	const isLoading = useSelector(isLoadingState);
	const status = useSelector(statusState);
	const text = useSelector(textState);

	return {
		isLoading,
		status,
		text,
	};
};
