var chgpass = require('../config/chgpass');
var register = require('../config/register');
var login = require('../config/login');
var parking = require('../config/parking.js');
var users = require('../config/users.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.end("Server Ready For Work");
		console.log('ready for action');
	});
	app.post('/login',function(req,res){
		var email = req.body.email;
		var password = req.body.password;
		login.login(email,password,function (found) {
			console.log(found);
			res.json(found);
		});
	});
	app.post('/register',function(req,res){
		var email = req.body.email;
		var password = req.body.password;
		register.register(email,password,function (found) {
			console.log(found);
			res.json(found);
		});
	});
	app.post('/findParkings',function(req,res){
		var sendback;
		var coords = [];
    	coords[0] = req.body.longitude;
		coords[1] = req.body.latitude;		
		console.log("longitude is: ",longitude, "latitude is: ", latitude);
		parking.find({ location :
			{ $near :
					coords,
					$maxDistance : 2000
				}
			}
		).exec(function(err,parkings){

			if(parkings.length != 0){											
				console.log(JSON.stringify(parkings));			
				res.send({parkings: parkings});								
			}
			else
			{
				console.log("No Results");
				res.send({});
			}
		});					
	});
	app.post('/location',function(req,res){		
		var longitude = req.body.longitude;
		var latitude = req.body.latitude;		
		var token = req.body.token;
		var user = new users({token: token});
		//console.log(user);
		//console.log(token);		
		var newparking = new parking({
			location: [longitude, latitude]});			
	parking.find({location: [longitude, latitude]},function(err,parkings){
		if(parkings.length != 0){											
			console.log('already exists');
				//console.log(longitude, latitude);
				res.json("ok");				
			}
			else{	
				newparking.save(function (err) {
					users.find({token: token}, function(err, user)
					{
						if(!err)
						{							
							console.log("fuck yeah");
						}
					})
					console.log(longitude, latitude, "Saved To DB");	
					res.json("ok");});
			}
		});
});
	app.post('/api/chgpass', function(req, res) {
		var id = req.body.id;
		var opass = req.body.oldpass;
		var npass = req.body.newpass;
		chgpass.cpass(id,opass,npass,function(found){
			console.log(found);
			res.json(found);
		});
	});
	app.post('/api/resetpass', function(req, res) {
		var email = req.body.email;
		chgpass.respass_init(email,function(found){
			console.log(found);
			res.json(found);
		});
	});
	app.post('/api/resetpass/chg', function(req, res) {
		var email = req.body.email;
		var code = req.body.code;
		var npass = req.body.newpass;
		chgpass.respass_chg(email,code,npass,function(found){
			console.log(found);
			res.json(found);
		});
	});
};