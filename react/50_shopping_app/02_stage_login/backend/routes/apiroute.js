const express = require("express");

let router = express.Router();

let database = [];
let id = 100;

//REST API

router.get("/shopping",function(req,res) {
	return res.status(200).json(database);
})

router.post("/shopping",function(req,res) {
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":id
	}
	id++;
	database.push(item);
	return res.status(201).json(item);
})

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let tempDatabase = database.filter(item => item.id !== tempId);
	database = tempDatabase;
	return res.status(200).json({"Message":"Success"})
})

router.put("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":tempId
	}
	for(let i=0; i<database.length; i++) {
		if(database[i].id === tempId) {
			database.splice(i,1,item)
			return res.status(200).json({"Message":"Success"})
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

module.exports = router;