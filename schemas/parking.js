var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var parkingSchema = mongoose.Schema({
	longitude : Number,
	latitude : Number,	
});

module.exports = mongoose.model('parking', parkingSchema);