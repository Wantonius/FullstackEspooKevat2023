import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {LoginState} from '../types/states';
interface Props {
	logout():void;
	token:string;
	isLogged:boolean;
	username:string;
}

const Navbar:React.FC<Props> = (props:Props) => {
	
	const stateSelector = (state:LoginState) => state;
	const state = useSelector(stateSelector);
	
	if(state.isLogged) {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
			<ul className="navbar-nav">
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/" className="nav-link">Shopping List</Link>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/form" className="nav-link">Add new item</Link>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<p className="nav-link" style={{"color":"blue"}}>Logged in as {props.username} </p>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/" className="nav-link" onClick={props.logout}>Logout</Link>
				</li>
			</ul>
		</nav>
	)
	} else {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
		</nav>
	)		
	}
}

export default Navbar;