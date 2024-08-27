/** @format */

import React from 'react';
import { ResultStatus } from './Result.styled';

function Result({ status, result }) {
	return <ResultStatus>{status ? result || '_____' : 'Game over'}</ResultStatus>;
}

export default Result;
