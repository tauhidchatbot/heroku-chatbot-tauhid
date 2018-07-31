var model = require("../model/dbModel.js");
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');


var bodyParser = require('body-parser');
var botDB = mongoose.model('botModel');
var randomToken = require('random-token');


exports.userRegistration = function(req, res) {
	var token = randomToken(16);
	//console.log(req.body);
	botDB.find({
		username : req.body.username
	}, function(err, data) {
		//console.log(data);
		if (data.length > 0) {
			res.json({
				'message' : 'already user' + req.body.username,
				'authentication' : false
			});
		} else {
			   var saveData = new botDB({
			 	name      : req.body.name,
				username  : req.body.username,
				email     : req.body.email,
				password  : req.body.password,
				token     : token,
				Is_Active : false
			});
			   console.log(saveData);
			  /* saveData.save();
			   return;*/
			saveData.save(function(err, data){
				console.log(data);
				console.log('error value tauhid ' + " " + err);
				//console.log(data);
				if (err) {
					console.log("err");
				} else {
					console.log("saved successfully");
				}
			})
			res.json({
				'message' : 'registration completed',
				'authentication' : true
			})
		}
	})
}


/*43b5e081aa144babbfd72c48815f7aad


e6ce4cf6989c4588a3b02a1dc17af540*/

exports.pizzabot = function(req, res) {

console.log("tauhid pizza bot details here");

if (req.body.result.action === "a_fetch_user_details") {
	console.log("fetch user action fired");
	if (req.body.result.parameters["username"] != "") {
		return res.json({
			speech : "Fetched user details",
			displaytext : "welcome Tauhid Raza Khan!",
			followupEvent : {
				"data" : {
					"pizzatype" : req.body.result.parameters["pizzatype"],
					"pizzasize" : req.body.result.parameters["pizzasize"],
					"username"  : req.body.result.parameters["username"],
					"address"   : "Sohana Road Gurgaon",
					"phonenum"  : "1234567891",
					"email"     : req.body.result.parameters["email"]
				},
				name : "e_fetch_user_details"
			},
			source : "from tauhid"
		});
	}
}

}