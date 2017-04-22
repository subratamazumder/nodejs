var sayHello = function(str) {
  return 'hi '+ str;
};
var adder = function(a,b){
  return `Sum of ${a} & ${b} is ${a +b}`;
};
var constant =1;
//approach one
module.exports.sayHello = sayHello;
module.exports.adder = adder;
module.exports.constant = constant;
