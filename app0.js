// var utility = require ('./utility1');
//
// console.log(utility.sayHello('pepa'));
// console.log(utility.adder(3.3,5.7));
// console.log(utility.constant);
var events = require('events');
//approach one
// var myEmitter = new events.EventEmitter();
// myEmitter.on('eventName1',function (msg) {
// console.log('eventName1 fired'+msg);
// });
//
// myEmitter.emit('eventName1','hello');

//approach two
var util = require('util');
var Employee = function(name){
  this.name = name;
};

util.inherits(Employee,events.EventEmitter);
var emp1 = new Employee('emp1');
var emp2 = new Employee('emp2');

emp1.on('speak',function(msg){
  console.log('hi '+msg);
});
emp1.emit('speak','peepa');
