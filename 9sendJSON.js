// serve JSON => application/json
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('A request was made: ' + req.url );
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  // send here, pop data in end()
  // yet end only accept a string or a buffer
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '192.168.0.13');
console.log('192.168.0.13 now listening to port 3000');
