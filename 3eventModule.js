var events = require('events');

// event emitter example1
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});
myEmitter.emit('someEvent', 'the event was emiteed');


// util module inherits some objects built in nodejs
var util = require('util');

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryan = new Person('ryan');

james.on('x',function(mssg) {
  console.log(mssg);
});
james.emit('x',james.name);

var people = [james,mary,ryan];
people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(`the name of person is ${person.name}, he/she says: "${mssg}"`);
  })
});

ryan.emit('speak', 'oh yes');
