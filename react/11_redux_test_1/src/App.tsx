import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {State} from './reducers/countReducer';
function App() {
	
	const dispatch = useDispatch();
	
	const stateSelector = (state:State) => state;
	const state:State = useSelector(stateSelector);
	
	return (
		<div className="App">
			<h3>Current value:{state.count}</h3>
			<button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
			<button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
		</div>
	);
}

export default App;
