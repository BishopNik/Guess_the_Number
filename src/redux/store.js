/** @format */

import { configureStore } from '@reduxjs/toolkit';
import mainSlice from 'redux/mainSlice';

export const store = configureStore({
	reducer: {
		main: mainSlice,
	},
});
