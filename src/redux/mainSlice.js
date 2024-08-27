/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { startGame, guessTheNumber } from './operation';
import { toastStart } from 'components/Helpers';

const initialState = {
	isLoading: false,
	status: false,
	text: '____',
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(startGame.pending, state => {
				state.isLoading = true;
			})
			.addCase(startGame.fulfilled, (state, { payload }) => {
				state.status = payload.status;
				state.text = payload.text;
				state.isLoading = false;
			})
			.addCase(startGame.rejected, state => {
				state.isLoading = false;
			})
			.addCase(guessTheNumber.pending, state => {
				state.isLoading = true;
			})
			.addCase(guessTheNumber.fulfilled, (state, { payload }) => {
				if (!payload.status) {
					toastStart('The number is guessed! Game stoped!');
				}
				state.status = payload.status;
				state.text = payload.text;
				state.isLoading = false;
			})
			.addCase(guessTheNumber.rejected, state => {
				state.isLoading = false;
			});
	},
});

export default mainSlice.reducer;
