var fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var contentBuffer = fs.readFileSync("index.html");
  var content = contentBuffer.toString("UTF-8"); 
console.log(content);
  
  response.send(content);
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
