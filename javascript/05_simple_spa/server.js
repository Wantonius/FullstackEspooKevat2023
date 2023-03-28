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

app.listen(3000);

console.log("Running in port 3000");

