// WRITEABLE STREAM - allow nodejs to write data to a STREAM
// READABLE STREAM - allow nodejs to read data from a STREAM
// DUPLEX - both read and write

var http = require('http');
var fs = require('fs');

// READABLE STREAM - different comparing to fs.readFile
var myReadStream = fs.createReadStream(__dirname + '/README.md','utf8');
// WRITEABLE STREAM
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// here mannually listen and write
myReadStream.on('data', function(chunk){
  console.log('new chunk receive: ');
  // console.log(chunk);
  myWriteStream.write(chunk);
})

// Automatically, we still need a read stream and write stream
// pipe a readable to a writable, we can't pipe from a writable stream
// because we cant read from that
myReadStream.pipe(myWriteStream);
