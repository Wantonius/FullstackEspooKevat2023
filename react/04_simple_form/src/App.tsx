import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import Person from './models/Person';

interface State {
	greeting:string;
}

function App() {
	
	const [state,setState] = useState<State>({
		greeting:"No greeting yet."
	})
	
	const setGreeting = (person:Person) => {
		let name = person.firstname+" "+person.lastname;
		setState({
			greeting:"Hello, "+name
		})
	}
	
	return (
		<div className="App">
			<ContactForm setGreeting={setGreeting}/>
			<h3>{state.greeting}</h3>
		</div>
	);
}

export default App;
