
var http = require('http');
var ip = require('ip');
var url = '/api/whoami';
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
}).listen(3000);

