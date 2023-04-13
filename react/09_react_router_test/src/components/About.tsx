import React from 'react';
import {useNavigate} from 'react-router-dom';

const About:React.FC<{}> = (props) => {
	
	const navigate = useNavigate();
	
	return(
		<div>
			<h2>This is a React Router example app</h2>
			<button onClick={() => navigate("/secret")}>Go to secret page</button>
		</div>
	)
	
}

export default About;