// PROTOCOLS
// FTP - file transfer protocol
// HTTP - WEBSITES

// server to client => TCP
// smalls packets are tranfer through sockets

// if we run nodejs on a server, we can tell node what
// information we want to send out to client when they
// make a particular response

// PORTS
// e.g. 172.24.86.56: 3000

// CLIENT == request + request header ==> SERVER
// CLIENT <== respnse + responese header == SERVER

// HEADER ( CONTENT TYPE + STATUS )

// CREATE OWN SERVER (http module)
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('A request was made: ' + req.url );
  // response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // end response and send response message
  res.end('Hey ninjas');
});

// port number
server.listen(3000, '192.168.0.13');
console.log('192.168.0.13 now listening to port 3000');
