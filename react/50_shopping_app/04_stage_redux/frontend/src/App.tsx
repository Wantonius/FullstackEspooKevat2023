import React,{useEffect} from 'react';
import './App.css';
import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {LoginState} from './types/states';
function App() {
	
	const action = useAction();
	
	const stateSelector = (state:LoginState) => state;
  
	const state = useSelector(stateSelector);
  
	let messageArea = <h4 style={{"height":40}}></h4>
	
	if(state.loading) {
		messageArea = <h4 style={{"height":40}}>Loading ...</h4>
	}
	if(state.error) {
		messageArea = <h4 style={{"height":40}}>{state.error}</h4>
	}
	if(state.isLogged) {
	return (
		<div className="App">
			<Navbar logout={action.logout} isLogged={action.state.isLogged} token={action.state.token} username={action.userState.username}/>
			{messageArea}
			<Routes>
				<Route path="/" element={<ShoppingList list={action.state.list} edit={action.edit} remove={action.remove} getList={action.getList} token={action.state.token} />}
				/>
				<Route path="/form" element={<ShoppingForm add={action.add} />} 
				/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</div>
	);
	} else {
	return (
		<div className="App">
			<Navbar logout={action.logout} isLogged={action.state.isLogged} token={action.state.token} username={action.userState.username}/>
			{messageArea}
			<Routes>
				<Route path="/" element={<LoginPage />}
				/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</div>
	);
	}
}

export default App;
