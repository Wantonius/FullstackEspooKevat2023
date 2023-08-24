import {useState,useEffect} from 'react';

const useAction = () => {
	
	const [state,setState] = useState({
		list:[],
		token:"",
		isLogged:false,
		loading:false,
		error:""
	})
	
	const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{},
		action:""
	})
	
	const baseUrl = "https://average-sarong-slug.cyclic.app"

	//FETCH USEEFFECT
	
	useEffect(() => {
		if(!urlRequest.url) {
			return;
		}

		const fetchData = async () => {
			setState((state) => {
				return {
					...state,
					loading:true,
					error:""
				}
			})
			let url = baseUrl+urlRequest.url;
			const response = await fetch(url,urlRequest.request);
			setState((state) => {
				return {
					...state,
					loading:false
				}
			})
			if(!response) {
				setState({
					list:[],
					isLogged:false,
					loading:false,
					token:"",
					error:"Server never responded. Logging you out!"
				})
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "register":
						setState((state) {
							return {
								...state,
								error:"Register success!"
							}
						})
						return;
					default:
						return;
				}
			} else {
				if(response.status === 403) {
					setState({
						list:[],
						isLogged:false,
						loading:false,
						token:"",
						error:"Session expired. Logging you out."
					})
					return;
				}
				let errorMessage = "Server responded with a status "+response.status;
				switch(urlRequest.action) {
					case "register":
						if(response.status === 409) {
							setState((state) => {
								return {
									...state,
									error:"Username already in use."
								}
							})
						} else {
							setState((state) => {
								return {
									...state,
									error:errorMessage
								}
							})
						}
						return;
					default:
						return;
				}
			}
		}
		
		fetchData();
	},[urlRequest]);
	
	//LOGIN API
	
	const register = (user) => {
		setUrlRequest({
			url:"/register",
			request:{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify(user)
			},
			action:"register"
		})
	}
	
	//SHOPPING API

	return {state,register};

}

export default useAction;