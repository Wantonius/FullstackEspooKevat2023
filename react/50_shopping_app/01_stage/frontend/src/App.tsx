import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAction from './hooks/useAction';

function App() {
	
	const [state,getList,add,remove,edit] = useAction();
  
	return (
		<div className="App">

		</div>
	);
}

export default App;
