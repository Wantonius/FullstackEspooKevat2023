import {useState} from 'react';
import {View,Text,Pressable,StyleSheet,FlatList} from 'react-native';

const ContactList = (props) => {
	
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection:"row",
		height:60,
		alignItems:"center",
		justifyContent:"space-between"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	},
	buttonStyle:{
		width:80,
		height:50,
		borderRadius:5,
		backgroundColor:"red",
		alignItems:"center",
		justifyContent:"center"
	}
})

export default ContactList;