/** @format */

import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { handleClickAnimation, toastWindowError } from '../Helpers';
import * as yup from 'yup';
import { Label, FormikContainer, InputFormik, SendButton } from './NumberInput.styled.js';
import { guessTheNumber } from 'redux/operation';

function NumberInput({ status }) {
	const dispatch = useDispatch();

	const schema = yup.object().shape({
		number: yup.number().required('Number is required').typeError('Must be a number'),
	});

	const handleSubmit = ({ number }, actions) => {
		schema
			.validate({ number })
			.then(() => {
				dispatch(guessTheNumber({ number }));
			})
			.catch(validationErrors => {
				toastWindowError(`Error: ${validationErrors.errors}`);
			});
	};

	return (
		<>
			<Formik
				initialValues={{
					number: '',
				}}
				onSubmit={handleSubmit}
			>
				<FormikContainer>
					<Label htmlFor='number'>Number</Label>
					<InputFormik
						id='number'
						type='number'
						name='number'
						title='Please enter number'
						required
						autoComplete='off'
						placeholder='0-100'
						disabled={!status}
					/>

					<SendButton type='submit' onClick={handleClickAnimation} disabled={!status}>
						Check
					</SendButton>
				</FormikContainer>
			</Formik>
		</>
	);
}

export default NumberInput;
