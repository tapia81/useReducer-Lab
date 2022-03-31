import { useReducer } from 'react';
import { Reducer } from '../reducers/Reducer';

const initialState = 0;
export const Home = () => {
	//usereducer accepts a reducer as a parameter
	const [ state, dispatch ] = useReducer(Reducer, initialState);

	const increment = (value) => {
		dispatch({ type: 'ADD', payload: value });
		//dispatch calls reducer by itself. It will accept an action that will manipulate state
		//dispatch knows this is an action so dont need to write it
	};

	const decrement = (value) => {
		dispatch({ type: 'SUBTRACT', payload: value });
	};
	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => increment(5)}>Increment</button>
			{/* () => helps prevents calling the function prematuring  */}
			<button onClick={() => decrement(5)}>Decrement</button>
			<h1>{state}</h1>
		</div>
	);
};
