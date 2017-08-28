'use strict';

import Person from './person-old.js';
import User from './user.js';
import Admin from './admin.js';
import Male from './male.js';

let john = new Person('John', 25);

// john.sayHello();
console.log(john.constructor);


let piter = new User('Piter', 25);

// piter.sayHello();


let mike = new Admin('Mike', 35);

let carl = new Male('Carl', 30);

// mike.sayHello();

console.log(carl.constructor);

carl.sayHello();
