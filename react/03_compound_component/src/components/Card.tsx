import React,{useState} from 'react';

interface State {
	color:string;
}

const Card:React.FC<{}> = (props) => {
	
	const [state,setState] = useState<State>({
		color:"red"
	})
	
	const changeColor = () => {
		let color:string = "#";
		const letters:string = "ABCDEF0123456789";
		for(let i=0;i<6;i++) {
			let temp = Math.floor(Math.random()*16);
			color = color + letters[temp]
		}
		setState({
			color:color
		})
	}
}

export default Card;


