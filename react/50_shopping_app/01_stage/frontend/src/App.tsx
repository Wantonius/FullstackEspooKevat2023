import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';

function App() {
	
	const action = useAction();
  
	return (
		<div className="App">
			<ShoppingForm add={action.add}/>
		</div>
	);
}

export default App;
