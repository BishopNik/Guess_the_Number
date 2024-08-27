/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastWindowError } from 'components/Helpers';

// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'https://guess-the-number-api.onrender.com/api';

export const startGame = createAsyncThunk('main/startGame', async (status, thunkAPI) => {
	try {
		const res = await axios.post(`/start_game`, status);
		return res.data;
	} catch ({ response }) {
		toastWindowError(response?.data?.message);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const guessTheNumber = createAsyncThunk('main/Guess', async (number, thunkAPI) => {
	try {
		const res = await axios.post('/guess', number);

		return res.data;
	} catch ({ response }) {
		toastWindowError(response?.data?.message);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});
