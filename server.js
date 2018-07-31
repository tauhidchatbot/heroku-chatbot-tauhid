var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 /*GLOBAL.mongoose = mongoose;*/
 var db = require('./config/dbConfig.js');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

require('./routes.js')(app)