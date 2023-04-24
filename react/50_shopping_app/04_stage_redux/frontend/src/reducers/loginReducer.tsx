import * as actionConstants from '../types/actionConstants';
import {LoginState} from '../types/states';
import {AnyAction,Reducer} from 'redux';

const getInitialState = ():LoginState => {
	let state = sessionStorage.getItem("loginstate");
	if(state) {
		return JSON.parse(state)
	} else {
		return {
			isLogged:false,
			loading:false,
			token:"",
			error:""
		}
	}
}

const saveToStorage = (state:LoginState) => {
	sessionStorage.setItem("loginstate",JSON.stringify(state));
}

const initialState = getInitialState();


const loginReducer:Reducer<LoginState,AnyAction> = (state = initialState,action) => {
	console.log("LoginReducer, action",action)
	let tempState:LoginState = {
		isLogged:false,
		loading:false,
		token:"",
		error:""
	}
	switch(action.type) {
		case actionConstants.LOADING:
			return {
				...state,
				error:"",
				loading:true
			}
		case actionConstants.STOP_LOADING:
			return {
				...state,
				loading:false
			}
		case actionConstants.REGISTER_SUCCESS:
			tempState = {
				...state,
				error:"Register success"
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.REGISTER_FAILED:
		case actionConstants.LOGIN_FAILED:
			tempState = {
				...state,
				error:action.error
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGIN_SUCCESS:
			tempState = {
				...state,
				token:action.token,
				isLogged:true
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_SUCCESS:
			tempState = {
				isLogged:false,
				loading:false,
				token:"",
				error:""
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_FAILED:
			tempState = {
				isLogged:false,
				loading:false,
				token:"",
				error:action.error
			}
			saveToStorage(tempState);
			return tempState;
		default:
			return state;
	}
}

export default loginReducer;