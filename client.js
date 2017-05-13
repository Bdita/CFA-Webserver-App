// using request module
var request = require("request");

// make a get request to localhost
request("http://localhost:3000/index.html",function(error,response,body)
{
  // send the response from localhost to console.log
	console.log(body);
});
