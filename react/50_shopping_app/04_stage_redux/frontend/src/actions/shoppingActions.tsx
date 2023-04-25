import {loading,stopLoading,logoutFailed} from './loginActions';
import ShoppingItem from '../models/ShoppingItem';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import * as actionConstants from '../types/actionConstants';

//ASYNC THUNKS

export const getList = (token:string,search:string) => {
	return (dispatch:ThunkDispatch<any,any,AnyAction>) => {
		let url = "/api/shopping"
		if(search) {
			url = url + "?type="+search
		}
		let request = new Request(url,{
			method:"GET",
			headers: {
				"token":token
			}
		})
		handleFetch(request,"getlist",dispatch,token);
	}
}

const handleFetch = async (request:Request,act:string,dispatch:ThunkDispatch<any,any,AnyAction>,token:string) => {
	dispatch(loading());
	const response = await fetch(request);
	dispatch(stopLoading());
	if(!response) {
		dispatch(logoutFailed("There was no response from the server. Logging you out."))
		return;
	}
	if(response.ok) {
		switch(act) {
			case "getlist":
				let temp = await response.json()
				if(!temp) {
					dispatch(fetchListFailed("Failed to parse shopping information. Try again later"))
					return;
				}
				let list = temp as ShoppingItem[];
				dispatch(fetchListSuccess(list));
				return;
			default:
				return;
		}
	} else {
		if(response.status === 403) {
			dispatch(logoutFailed("Your session has expired. Logging you out"));
			return;
		}
		let errorMessage = "Server responded with a status "+response.status+" "+response.statusText
		switch(act) {
			case "getlist":
				dispatch(fetchListFailed("Fetching shopping info failed. "+errorMessage));
				return;
			default:
				return;
		}
	}
}

//ACTION CREATORS

const fetchListSuccess = (list:ShoppingItem[]) => {
	return {
		type:actionConstants.FETCH_LIST_SUCCESS,
		list:list
	}
}

const fetchListFailed = (error:string) => {
	return {
		type:actionConstants.FETCH_LIST_FAILED,
		error:error
	}
}