//approach three
var sayHello = function(str) {
  return 'hi '+ str;
};
var adder = function(a,b){
  return `Sum of ${a} & ${b} is ${a +b}`;
};
var constant =1;
module.exports = {
  sayHello : sayHello,
  adder : adder,
  constant : constant
}
