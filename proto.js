var obj = {};
console.log(obj.__proto__ === Object.prototype); // true

var func = function(){}
console.log(func.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype);

var arr = [];
console.log(arr.__proto__ === Array.prototype); // true
Array.prototype.__proto__ === Object.prototype


var Person = function(){};
Person.prototype.__proto__ === Object.prototype
