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
//mongoose.connect('mongodb://kwebos:guy1234amir@ds033153.mongolab.com:33153/parkspoting');
mongoose.connect('mongodb://kwebos:guy1234amir@ds059712.mongolab.com:59712/parkspotinggoogle');
module.exports = mongoose.model('users', userSchema);
