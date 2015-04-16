var crypto = require('crypto');
var rand = require('csprng');
var mongoose = require('mongoose');
var user = require('./users.js');
exports.register = function(email,password,callback) {
	var x = email;
	if((x.indexOf('@') != -1 && x.length > 1)){
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && password.length > 1) /*&& password.match(/[0-9]/)) && password.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) */{
			var temp =rand(160, 36);
			var newpass = temp + password;
			var token = crypto.createHash('sha512').update(email +rand).digest("hex");
			var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");
			var newuser = new user({
				token: token,
				email: email,
				hashed_password: hashed_password,
				name: "Fart",
				salt :temp });
			user.find({email: email},function(err,users){
				var len = users.length;
				if(len == 0){
					newuser.save(function (err) {
						// console.log(x);
						// console.log(x.length);
						callback({'response':"Sucessfully Registered"});
					});
				}else{
					callback({'response':"Email already Registered"});
				}});}else{
				callback({'response':"Password Weak"});
			}}else{
				callback({'response':"Email Not Valid"});
			}
		}