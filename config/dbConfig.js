var mongoose = require('mongoose');

//var dburl    = 'mongodb://127.0.0.1:27017/tauhidbotdb'; //for localhost

var dburl = 'mongodb://botmodels:tauhid123@ds235461.mlab.com:35461/tauhidbotdb'; //for mlab connection


mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + " " + dburl);
	// body...
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});




/*below code for use MongoClient====================*/

/*var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var MongoClient = mongodb.MongoClient;

//(Focus on This Variable)
var url = 'mongodb://127.0.0.1:27017/tauhidbotdb';   

//var url = 'mongodb://botmodels:tauhid123@ds235461.mlab.com:35461/tauhidbotdb';
//var url = 'mongodb://ds235461.mlab.com:35461/tauhidbotdb';

  MongoClient.connect(url, { useNewUrlParser: true }, { uri_decode_auth: true }, function (err, db) {
  	//console.log(db);
  if (err) {
    console.log(err);
  } else {
    console.log('Connection established to', url);

    db.close();
  }
});*/