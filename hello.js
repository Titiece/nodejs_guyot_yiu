var http = require('http');
var users = require('users.js');

http.createServer(function (req,res){
	res.writeHead(200,{content:'application/json'})
	users.get(11, function(user){
		var response = {
			
			info:"here is your user:",
			user:user
		}
	}

	/*;
	res.send(response);
		//var user = users.get(11);
	//res.writeHead(200,{content:'text/plain'});*/
res.end(JSON.stringify(response)};
}).listen(1337,'127.0.0.1');