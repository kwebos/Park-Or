var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
  token : String,
  email: String,
  hashed_password: String,
  salt : String,
  temp_str:String,
  name: String,
  carSize: String,
  parkingZone: Number,
});

//mongoose.connect('mongodb://localhost:27017/node-android');
module.exports = mongoose.model('users', userSchema);
