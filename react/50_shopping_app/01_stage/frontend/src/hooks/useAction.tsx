import {useState,useEffect} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface State {
	list:ShoppingItem[];
}

interface UrlRequest {
	request:Request;
	action:string;
}
const useAction = () => {
	
	const [state,setState] = useState<State>({
		list:[]
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//FETCH useEffect
	useEffect(() => {},[urlRequest]);

	//HELPER FUNCTIONS
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})
	}
	
	const remove = (id:number) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE"
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item.id,{
				method:"PUT",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(item)
			}),
			action:"edititem"
		})
	}
	
	return [state,getList,add,remove,edit];
}

export default useAction;


