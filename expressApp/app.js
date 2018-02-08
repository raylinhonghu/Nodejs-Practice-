// return an express function
var express = require('express');
// app is an express app
var app = express();

// let express know we want ejs to be the template engine
app.set('view engine', 'ejs');

// HTTP METHODS (VERBS)
// GET - app.get('route', fn)
// POST - app.post('route', fn)
// DELETE - app.delete('route', fn)


app.get('/contact',function(req,res){
  res.send('this is the contact page');
});

// "/:name,  /:id ,..." req.params.id
app.get('/profile/:name',function(req,res){
  var data ={age:29, job:'ninja', hobbie:['playLeague','eating','sleeping']};

  // we dont send ejs file, we render a view
  // the way to pass data to a view is by passing a second parameter to render method
  res.render('profile',{person:req.params.name, data:data});
});

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

// listen to a port
app.listen(3000);
