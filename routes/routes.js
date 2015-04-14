var chgpass = require('../config/chgpass');
var register = require('../config/register');
var login = require('../config/login');
var parking = require('../config/parking.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.end("Server Ready For Work");
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
	app.post('/location',function(req,res){
		var longitude = req.body.longitude;
		var latitude = req.body.latitude;
		var newparking = new parking({
				longitude: longitude,
				latitude: latitude});			
					newparking.save(function (err) {
			console.log(longitude, latitude);	
			res.json("ok");});
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