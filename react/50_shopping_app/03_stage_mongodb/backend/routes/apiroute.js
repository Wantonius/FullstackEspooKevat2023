const express = require("express");
const itemModel = require("../models/item");

let router = express.Router();

let database = [];
let id = 100;

//REST API

router.get("/shopping",function(req,res) {
	let query = {"user":req.session.user}
	itemModel.find(query).then(function(items) {
		return res.status(200).json(items);
	}).catch(function(err){
		console.log("Failed in finding items. Reason",err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

router.post("/shopping",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	let item = new itemModel({
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"user":req.session.user
	})
	item.save().then(function(item) {
		return res.status(201).json(item);
	}).catch(function(err) {
		console.log("Failed to save new item. Reason",err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0; i<database.length; i++) {
		if(database[i].id === tempId) {
			if(database[i].user === req.session.user) {
				database.splice(i,1)
				return res.status(200).json({"Message":"Success"})
			}
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

router.put("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":tempId,
		"user":req.session.user
	}
	for(let i=0; i<database.length; i++) {
		if(database[i].id === tempId) {
			if(database[i].user === req.session.user) {
				database.splice(i,1,item)
				return res.status(200).json({"Message":"Success"})
			}
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

module.exports = router;