/** @format */

import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useMain } from 'hooks';
import { startGame } from 'redux/operation';
import Loader from 'components/Loader';
import StartStop from 'components/StartStop';
import NumberInput from 'components/NumberInput';
import Result from 'components/Result';
import { toastStart, toastStop, toastWindowError } from './Helpers';
import { Container, TitleName } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const dispatch = useDispatch();
	const { isLoading, status, text } = useMain();

	const changeStatus = () => {
		dispatch(startGame({ status: `${!status}` }))
			.then(_ => (!status ? toastStart('Game started!') : toastStop('Game stoped!')))
			.catch(_ => toastWindowError('Error starting game!'));
	};

	return (
		<Container>
			<TitleName>Guess the Number</TitleName>

			<StartStop status={status} action={changeStatus} />

			<NumberInput status={status} />

			<Result status={status} result={text} />

			{isLoading && <Loader />}

			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
		</Container>
	);
}

export default App;
