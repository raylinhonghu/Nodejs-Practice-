// FS core module
var fs = require('fs');

// synchronous read and write
// var readMe = fs.readFileSync('README.md', 'utf8');
// fs.writeFileSync('WRITEME.txt',readMe);

// asychronous read and write
fs.readFile('README.md','utf8', function(err,data){
  fs.writeFile('WRITEME.txt',data, (err)=>{
    if (err) throw err;
    console.log("it is saved!")
  });
});
