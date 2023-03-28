const express = require("express");

let app = express();

app.use("/",express.static("public"));
app.use(express.json());

//DATABASE

let database = [];
let id = 100;

//REST

/*
CREATE - POST "/api/contact"
READ - GET "/api/contact"
UPDATE - PUT "/api/contact/:id"
DELETE - DELETE "/api/contact/:id"
*/

//contact Object
/*
	id:number,
	firstname:string,
	lastname:string,
	email:string,
	phone:string

*/

app.get("/api/contact",function(req,res) {
	return res.status(200).json(database);
})

app.post("/api/contact", function(req,res) {
	let contact = {
		id:id,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email:req.body.email,
		phone:req.body.phone
	}
	id++;
	database.push(contact);
	return res.status(201).json({"message":"Created"});
})

app.delete("/api/contact/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	database = database.filter(contact => contact.id !== tempId);
	return res.status(200).json({"message":"Success"});
})

app.put("/api/contact/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let contact = {
		id:tempId,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email:req.body.email,
		phone:req.body.phone
	}
	for(let i=0;i<database.length;i++) {
		if(tempId === database[i].id) {
			database.splice(i,1,contact);
			return res.status(200).json({"message":"Success"})
		}
	}
	return res.status(404).json({"message":"Not found"})
})

app.listen(3000);

console.log("Running in port 3000");

