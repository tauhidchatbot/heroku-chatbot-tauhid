var mongoose = require('mongoose');
// var dburl = 'mongodb://localhost/studentDB';
var dburl    = 'mongodb://127.0.0.1:27017/chatBotDB';
//console.log('Hello trk khan');
mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + " " + dburl);
	// body...
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});