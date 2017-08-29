'use strict';

import userList from './db/users.json';

const USER_STORAGE_KEY = 'user';

class Auth {

    constructor () {
        this.storage = window.localStorage;
    }

    findUser (username, password) {
        for(let i = 0; i < userList.length; i++) {
            let user = userList[i];
            if(user.username === username && user.password === password) {

                return user;
            }
        }

        return null;
    }

    login (username, password) {

        const user = this.findUser(username, password);

        if(user) {
            this.storage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

            return user;
        }

        return false;
    }

    logout () {
        this.storage.removeItem(USER_STORAGE_KEY);
    }

    getUser() {
        const user = JSON.parse(this.storage.getItem(USER_STORAGE_KEY));

        return user;
    }
}

export default new Auth();