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
var stuff = require('./2module');
console.log(stuff.counter(['ww','wwx','xxx']));
console.log(stuff.adder(1,3));
console.log(stuff.pi);
console.log(stuff.suber(33,3));
