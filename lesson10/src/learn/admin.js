'use strict';

import User from './user.js';

class Admin extends User {
	constructor(name, age) {
		super(name, age);

		this.role = 'admin';
	}

	sayHello() {
		let parentPhrase = super.sayHello();
		console.log(parentPhrase + ' and I am admin');
	}
}

export default Admin;
