/** @format */

import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormikContainer = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 300px;
	padding: 40px 30px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	border-radius: 8px;
	box-shadow: 0px 0px 8px 4px rgba(128, 128, 128, 0.5);
`;

export const Label = styled.label`
	gap: 15px;
	margin-right: auto;
	width: 260px;
	font-size: 24px;
	font-weight: 600;
`;

export const InputFormik = styled(Field)`
	width: 260px;
	padding: 10px 25px;
	border-radius: 8px;
	border: none;
	outline: 2px solid lightgray;
	font-size: 24px;
	color: blue;
`;

export const SendButton = styled.button`
	border-radius: 6px;
	font-size: 22px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 260px;
	height: 48px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;
