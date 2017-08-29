'use strict';

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function(){
	console.log('Hello, I am ' + this.name);
};

export default Person;