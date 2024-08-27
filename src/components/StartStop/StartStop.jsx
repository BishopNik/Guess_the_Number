/** @format */

import React from 'react';
import { ActionButton } from './StartStop.styled';
import { handleClickAnimation } from '../Helpers';

function StartStop({ status, action }) {
	const handlerClick = target => {
		handleClickAnimation(target);
		action();
	};

	return <ActionButton onClick={handlerClick}> {status ? 'Stop' : 'Start'}</ActionButton>;
}

export default StartStop;
