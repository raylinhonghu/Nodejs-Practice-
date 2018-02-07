// normal function statement
function sayHi(){
  console.log('hi');
}
sayHi();


// function expression
// set an anonymous function with a variable
var sayBye = function() {
  console.log('bye')
};
sayBye();


// function calls a function
function callFunction(fun){
  fun();
}
callFunction(sayHi);


// module from 2module.js
var counter = require('./2module');
console.log(counter(['ww','wwx','xxx']));
