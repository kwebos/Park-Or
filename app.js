/**
 * Module dependencies.
 */
var express = require('express');
var connect = require('connect');
var app = express();
var port = process.env.PORT || 8080;
var cookieParser = require('cookie-parser');

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
//app.use(cookieParser());
app.use(connect.json());
//fuck this shit

// load the cookie parsing middleware

// Routes
require('./routes/routes.js')(app);
app.listen(port);
console.log("commit from master branch");
console.log("commit from masffdfdurtutter branch");