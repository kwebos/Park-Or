/**
 * Module dependencies.
 */
var express  = require('express');
var connect  = require('connect');
var app      = express();
var port     = process.env.PORT || 8080;
var cookieParser = require('cookie-parser');
// var myModule = require("./myModule");

// myModule.getParkings({x:4, y: 3}, function(results) {
// 	console.log(results);
// })

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(cookieParser());
app.use(connect.json());
app.use(connect.urlencoded());


// load the cookie parsing middleware

// Routes
require('./routes/routes.js')(app);
app.listen(port);
console.log('The App runs on port ' + port);