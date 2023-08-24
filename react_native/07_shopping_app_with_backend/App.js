import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAction from './hooks/useAction';
import LoginPage from './components/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
	
	const {state,register} = useAction();
	
	let title = "Shopping App";
	if(state.loading) {
		title = "Loading ..."
	}
	if(state.error) {
		title = state.error
	}
	
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				title:title,
				headerStyle:{
					backgroundColor:"#00CCCC"
				}
			}}>
				<Stack.Screen name="Login">
				{props => <LoginPage {...props} register={register}/>}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

