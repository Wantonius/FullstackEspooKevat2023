import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

function App() {
	
	const action = useAction();
  
	return (
		<div className="App">
			<ShoppingForm add={action.add}/>
			<ShoppingList list={action.state.list} edit={action.edit} remove={action.remove}/>
		</div>
	);
}

export default App;
