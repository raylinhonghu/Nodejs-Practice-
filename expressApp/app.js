// return an express function
var express = require('express');
// app is an express app
var app = express();

var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser, parse post data
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// let express know we want ejs to be the template engine
app.set('view engine', 'ejs');

// use middleware- code run between request and response
// we could match a route if we want or its global in the file
// app.use('/', function(req, res, next){next();});

// map assets folder to /assets
// the first argument passed in the use function is basically
// saying that anyone who tries to access files inside /assets
// should be served with the files inside the "assets" dir,
// which is the second parameter of the use function.
app.use('/assets', express.static('assets'));


// HTTP METHODS (VERBS)
// GET - app.get('route', fn)
// POST - app.post('route', fn)
// DELETE - app.delete('route', fn)


// "/:name,  /:id ,..." req.params.id
app.get('/profile',function(req,res){
  var data ={age:29, job:'ninja', hobbie:['playLeague','eating','sleeping']};
  // we dont send ejs file, we render a view
  // the way to pass data to a view is by passing a second parameter to render method
  res.render('profile',{person:req.params.name, data:data, qs: req.query});
});

app.get('/contact',function(req,res){
  // req.query stores the query strings
  res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
  // req.body here stores the post requests
  res.render('contact-success',{contacted: req.body});
});



app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

// listen to a port
app.listen(3000);
