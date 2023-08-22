import {useState} from 'react';
import {View,Text,Pressable,StyleSheet,FlatList} from 'react-native';

const ContactList = (props) => {
	
	const [state,setState] = useState({
		data:[
	{
		"firstname": "Renee",
		"lastname": "Avery",
		"id": 1
	},
	{
		"firstname": "Risa",
		"lastname": "Daugherty",
		"id": 2
	},
	{
		"firstname": "Mariam",
		"lastname": "Durham",
		"id": 3
	},
	{
		"firstname": "Lesley",
		"lastname": "Mendez",
		"id": 4
	},
	{
		"firstname": "Indira",
		"lastname": "Weber",
		"id": 5
	},
	{
		"firstname": "Zephania",
		"lastname": "Newton",
		"id": 6
	},
	{
		"firstname": "Halla",
		"lastname": "Howe",
		"id": 7
	},
	{
		"firstname": "Ruth",
		"lastname": "Randolph",
		"id": 8
	},
	{
		"firstname": "Julie",
		"lastname": "Sexton",
		"id": 9
	},
	{
		"firstname": "Suki",
		"lastname": "Calderon",
		"id": 10
	},
	{
		"firstname": "Abdul",
		"lastname": "Miller",
		"id": 11
	},
	{
		"firstname": "Danielle",
		"lastname": "Holcomb",
		"id": 12
	},
	{
		"firstname": "Zena",
		"lastname": "Barr",
		"id": 13
	},
	{
		"firstname": "Raja",
		"lastname": "Rodriguez",
		"id": 14
	},
	{
		"firstname": "Todd",
		"lastname": "Harris",
		"id": 15
	},
	{
		"firstname": "Ebony",
		"lastname": "Lamb",
		"id": 16
	},
	{
		"firstname": "Leilani",
		"lastname": "Blake",
		"id": 17
	},
	{
		"firstname": "Kuame",
		"lastname": "Brewer",
		"id": 18
	},
	{
		"firstname": "Courtney",
		"lastname": "Brown",
		"id": 19
	},
	{
		"firstname": "Amela",
		"lastname": "Carlson",
		"id": 20
	},
	{
		"firstname": "Vance",
		"lastname": "Reyes",
		"id": 21
	},
	{
		"firstname": "Freya",
		"lastname": "Hamilton",
		"id": 22
	},
	{
		"firstname": "Yoshi",
		"lastname": "Lee",
		"id": 23
	},
	{
		"firstname": "Samson",
		"lastname": "Norman",
		"id": 24
	},
	{
		"firstname": "Isaac",
		"lastname": "Matthews",
		"id": 25
	},
	{
		"firstname": "Hayes",
		"lastname": "Burch",
		"id": 26
	},
	{
		"firstname": "Illiana",
		"lastname": "Shepherd",
		"id": 27
	},
	{
		"firstname": "Gray",
		"lastname": "Galloway",
		"id": 28
	},
	{
		"firstname": "Carlos",
		"lastname": "Ramsey",
		"id": 29
	},
	{
		"firstname": "Samuel",
		"lastname": "Cortez",
		"id": 30
	},
	{
		"firstname": "Lamar",
		"lastname": "English",
		"id": 31
	},
	{
		"firstname": "Ori",
		"lastname": "Sanders",
		"id": 32
	},
	{
		"firstname": "Quin",
		"lastname": "Sears",
		"id": 33
	},
	{
		"firstname": "Octavia",
		"lastname": "Atkins",
		"id": 34
	},
	{
		"firstname": "Troy",
		"lastname": "Brooks",
		"id": 35
	},
	{
		"firstname": "Riley",
		"lastname": "Blevins",
		"id": 36
	},
	{
		"firstname": "Aline",
		"lastname": "Good",
		"id": 37
	},
	{
		"firstname": "Roanna",
		"lastname": "Duncan",
		"id": 38
	},
	{
		"firstname": "Cheryl",
		"lastname": "Lawrence",
		"id": 39
	},
	{
		"firstname": "Zachery",
		"lastname": "Hubbard",
		"id": 40
	},
	{
		"firstname": "Jenette",
		"lastname": "Mercado",
		"id": 41
	},
	{
		"firstname": "Magee",
		"lastname": "Hughes",
		"id": 42
	},
	{
		"firstname": "Aidan",
		"lastname": "Ray",
		"id": 43
	},
	{
		"firstname": "Lyle",
		"lastname": "Griffin",
		"id": 44
	},
	{
		"firstname": "Jennifer",
		"lastname": "Golden",
		"id": 45
	},
	{
		"firstname": "Fulton",
		"lastname": "Lang",
		"id": 46
	},
	{
		"firstname": "Forrest",
		"lastname": "Vargas",
		"id": 47
	},
	{
		"firstname": "Vielka",
		"lastname": "Tyson",
		"id": 48
	},
	{
		"firstname": "Audrey",
		"lastname": "Austin",
		"id": 49
	},
	{
		"firstname": "Sebastian",
		"lastname": "Clemons",
		"id": 50
	},
	{
		"firstname": "Baxter",
		"lastname": "Ward",
		"id": 51
	},
	{
		"firstname": "Hadley",
		"lastname": "Lowery",
		"id": 52
	},
	{
		"firstname": "Zenaida",
		"lastname": "Wooten",
		"id": 53
	},
	{
		"firstname": "Thaddeus",
		"lastname": "Beach",
		"id": 54
	},
	{
		"firstname": "Jin",
		"lastname": "Griffith",
		"id": 55
	},
	{
		"firstname": "Hector",
		"lastname": "Bauer",
		"id": 56
	},
	{
		"firstname": "Mark",
		"lastname": "Alvarez",
		"id": 57
	},
	{
		"firstname": "Graham",
		"lastname": "Morrow",
		"id": 58
	},
	{
		"firstname": "Halee",
		"lastname": "Molina",
		"id": 59
	},
	{
		"firstname": "Connor",
		"lastname": "Henderson",
		"id": 60
	},
	{
		"firstname": "Anika",
		"lastname": "Hudson",
		"id": 61
	},
	{
		"firstname": "Beverly",
		"lastname": "Head",
		"id": 62
	},
	{
		"firstname": "Kessie",
		"lastname": "Roberts",
		"id": 63
	},
	{
		"firstname": "Sara",
		"lastname": "Frank",
		"id": 64
	},
	{
		"firstname": "Wayne",
		"lastname": "Walton",
		"id": 65
	},
	{
		"firstname": "Regina",
		"lastname": "Williams",
		"id": 66
	},
	{
		"firstname": "Rhea",
		"lastname": "Cannon",
		"id": 67
	},
	{
		"firstname": "Emily",
		"lastname": "Cunningham",
		"id": 68
	},
	{
		"firstname": "Brody",
		"lastname": "Rutledge",
		"id": 69
	},
	{
		"firstname": "Halee",
		"lastname": "Puckett",
		"id": 70
	},
	{
		"firstname": "Freya",
		"lastname": "Austin",
		"id": 71
	},
	{
		"firstname": "Cyrus",
		"lastname": "Cardenas",
		"id": 72
	},
	{
		"firstname": "Zephr",
		"lastname": "Vance",
		"id": 73
	},
	{
		"firstname": "Jade",
		"lastname": "Howell",
		"id": 74
	},
	{
		"firstname": "Jakeem",
		"lastname": "Hooper",
		"id": 75
	},
	{
		"firstname": "Emily",
		"lastname": "Mcpherson",
		"id": 76
	},
	{
		"firstname": "Slade",
		"lastname": "Johns",
		"id": 77
	},
	{
		"firstname": "David",
		"lastname": "Wyatt",
		"id": 78
	},
	{
		"firstname": "Malachi",
		"lastname": "Kelly",
		"id": 79
	},
	{
		"firstname": "Henry",
		"lastname": "Fry",
		"id": 80
	},
	{
		"firstname": "Germane",
		"lastname": "Mcpherson",
		"id": 81
	},
	{
		"firstname": "Kessie",
		"lastname": "White",
		"id": 82
	},
	{
		"firstname": "Vanna",
		"lastname": "Lloyd",
		"id": 83
	},
	{
		"firstname": "Urielle",
		"lastname": "Kane",
		"id": 84
	},
	{
		"firstname": "Jael",
		"lastname": "Merritt",
		"id": 85
	},
	{
		"firstname": "August",
		"lastname": "Garrett",
		"id": 86
	},
	{
		"firstname": "Garth",
		"lastname": "Alexander",
		"id": 87
	},
	{
		"firstname": "Zeph",
		"lastname": "Olson",
		"id": 88
	},
	{
		"firstname": "Ria",
		"lastname": "Francis",
		"id": 89
	},
	{
		"firstname": "MacKensie",
		"lastname": "Norton",
		"id": 90
	},
	{
		"firstname": "Audra",
		"lastname": "Roberts",
		"id": 91
	},
	{
		"firstname": "Arden",
		"lastname": "Boyle",
		"id": 92
	},
	{
		"firstname": "Isabella",
		"lastname": "Dunn",
		"id": 93
	},
	{
		"firstname": "Logan",
		"lastname": "Velez",
		"id": 94
	},
	{
		"firstname": "Noel",
		"lastname": "Weeks",
		"id": 95
	},
	{
		"firstname": "Dara",
		"lastname": "Mejia",
		"id": 96
	},
	{
		"firstname": "Maisie",
		"lastname": "Joseph",
		"id": 97
	},
	{
		"firstname": "Wanda",
		"lastname": "Valencia",
		"id": 98
	},
	{
		"firstname": "Illiana",
		"lastname": "Wyatt",
		"id": 99
	},
	{
		"firstname": "Brady",
		"lastname": "Carey",
		"id": 100
	}
]
	})
	
	const removeItem = (id) => {
		setState((state) => {
			let tempList = state.data.filter(contact => contact.id !==id)
			return {
				data:tempList
			}
		})
	}

	return(
		<View>
			<FlatList data={state.data}
					renderItem={({item}) => {
						return(
							<View style={styles.rowStyle}>
								<Text style={styles.textStyle}>
									{item.firstname} {item.lastname}
								</Text>
								<Pressable style={styles.buttonStyle}
										onPress={() => removeItem(item.id)}>
									<Text>Remove</Text>
								</Pressable>
							</View>
						)
					}}
					/>
		</View>
	)

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