var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-android');

var parking = require('./schemas/parking');
var user = require('./schemas/user');