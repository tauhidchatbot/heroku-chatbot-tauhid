var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
		name      : {type : String},
		username  : {type : String},
		email     : {type : String},
		password  : {type : String},
		mobileNo  : {type : Number},
		pizzatype : {type : String},
		pizzasize : {type : Number},
		address   : {type : String},
		Is_Active : {type : Boolean},
		token     : {type: String}
});

var botModel = module.exports = mongoose.model('botModel', chatSchema);




//mobileNo  : {type : 'number'},
		/*pizzatype : {type : String},
		pizzasize : {type : 'number'},
		address   : {type : String},*/