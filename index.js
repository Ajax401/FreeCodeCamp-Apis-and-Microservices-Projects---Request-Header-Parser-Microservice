var http = require('http');
var ip = require('ip');
var port = process.env.PORT || 3000;
var url = '/api/whoami';
console.log(ip.address());
http.createServer(function(req,res){
	if(req.url === url){
    res.setHeader('Content-Type', 'application/json');
	var ipaddress = ip.address();
	var language =  req.headers["accept-language"];
	var os = req.headers['user-agent'];
    var myObj ={
		ipaddress:ipaddress,
		os: os,
		language: language.substr(0,5),
	};
	res.end(JSON.stringify(myObj));
	}
}).listen(port);

//github:https://github.com/Ajax401/FreeCodeCamp-Apis-and-Microservices-Projects---Request-Header-Parser-Microservice
//heroku:https://protected-plateau-50152.herokuapp.com/api/whoami