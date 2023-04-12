import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './models/Contact';

interface State {
	list:Contact[];
	id:number;
}

function App() {
	
	const [state,setState] = useState<State>({
		list:[],
		id:100
	})
	
	const addContact = (contact:Contact) => {
		setState((state) => {
			contact.id = state.id;
			return {
				list:state.list.concat(contact),
				id:state.id+1
			}
		})
	}

	const removeContact = (id:number) => {
		setState((state) => {
			let tempList = state.list.filter(contact => contact.id !== id);
			return {
				...state,
				list:tempList
			}
		})
	}
	
	return (
		<div className="App">

		</div>
	);
}

export default App;
