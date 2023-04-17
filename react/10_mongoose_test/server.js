const express = require("express");
const mongoose = require("mongoose");

let app = express();

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/testdatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(
	() => console.log("Connected to mongodb"),
	(error) => console.log("Failed to connect to mongodb. Reason:",error)
)

app.listen(5000);