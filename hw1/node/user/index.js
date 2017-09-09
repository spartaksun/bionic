var lodash = require('lodash');

var generateId = require('../generate_id.js');
var usersList = require('./users.json');
var users = createUserListWithId(usersList);

function createUserListWithId (list) {
	var result = [];
	var newItem;

	for (var i = 0; i < list.length; i++) {
		newItem = createUser(list[i].name);

		result.push(newItem);
	}

	return result;
}

function createUser(name) {
	return {
		name: name,
		id: generateId()
	}
}

function showUsersList() {
	for (var i = 0; i < users.length; i++) {
		console.log(users[i]);
	}
}

function getUserById(id) {
	return getUserByParameters({id: id})
}

function getUserByName(name) {
	return getUserByParameters({name: name})
}

function getUserByParameters(params) {
    var user = lodash.find(users, params);
    if(!user) {
        throw 'User not found!';
    }

    return user;
}

module.exports = {
	createUser: createUser,
	showUsersList: showUsersList,
	getUserById: getUserById,
	getUserByName: getUserByName,
};




