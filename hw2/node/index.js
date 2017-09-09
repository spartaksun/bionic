var lodash = require('lodash');

var users = require('./user');

console.log(
    users.getUserById(10),
    users.getUserByName('Wade')
);