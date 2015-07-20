var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var parkingSchema = mongoose.Schema({
	location: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'},      // create the geospatial index    
	userID: Schema.ObjectId,
});
mongoose.connect('mongodb://localhost:27017/node-android');
module.exports = mongoose.model('parking', parkingSchema);