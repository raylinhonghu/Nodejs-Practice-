var http = require('http');
var fs = require('fs');

// Here we created a server, and we get a request and a response,
// a response is a writable stream, and then we declare content type and status,
// after that, we specify a file to read, then we pipe the read buffers to the response.

var server = http.createServer(function(req, res){
  console.log('A request was made: ' + req.url );
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/README.md','utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '192.168.0.13');
console.log('192.168.0.13 now listening to port 3000');
