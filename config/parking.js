var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var parkingSchema = mongoose.Schema({
	longitude : Number,
	latitude : Number,
	userID: Schema.ObjectId,
});
mongoose.connect('mongodb://localhost:27017/node-android');
module.exports = mongoose.model('parking', parkingSchema);