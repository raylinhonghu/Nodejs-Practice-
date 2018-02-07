var fs = require('fs');

// delete file and erro callback
fs.unlink('WRITEME.txt', (err)=>{
  if (err) throw err;
});

fs.unlink('WRITME.txt', function(err){
  if(err){
    console.log(err);
  }
})

// create directory sync
fs.mkdirSync('newDirect');
fs.rmdirSync('newDirect');

// create directory Asyncly
fs.mkdir('newDirect',function(){
  fs.readFile('README.md','utf8',function(err,data){
    fs.writeFile('./newDirect/WRITEME.txt',data,function(err) {
      console.log(err);
    })
  })
})

// First remove file then delete directory 
fs.unlink('./newDirect/WRITEME.txt',function(err){
  console.log(err);
  fs.rmdir('newDirect',(err)=>{
    console.log(err);
  });
});
