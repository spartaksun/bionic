'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log('Hello, I am ' + this.name);

		return 'Hello, I am ' + this.name;
	}
}

export default User;

