var counter = function(arr){
  return 'There are ' + arr.length + ' element in this array';
};

// ES6 template string, uses backticks
// template string => can embed variables or expressions without concatenation
var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// module.exports =  {
//   counter: counter,
//   adder: adder,
//   pi: pi
// };

module.exports.suber = function(a,b){
  return `The subtraction of the 2 numbers is ${a-b}`;
};
