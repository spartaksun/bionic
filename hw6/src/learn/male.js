'use strict';

import Person from './person-old.js';

function Male(name, age){
	Person.apply(this, arguments);

	this.gender = 'male';

	this.sayHello = function(){
		Person.prototype.sayHello.call(this);
		console.log('I am male');
	};
}

Male.prototype = Object.create(Person.prototype);
Male.prototype.constructor = Male;


export default Male;