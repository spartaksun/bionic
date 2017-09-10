'use strict';

import userList from './db/users.json';
import accessList from './db/acl.json';

const USER_STORAGE_KEY = 'user';

class Auth {

    constructor (storage) {
        this.storage = storage;
    }

    getUserList = () => {
        return userList;
    };

    findUser (username, password) {
        for(let i = 0; i < userList.length; i++) {
            let user = userList[i];
            if(user.username === username) {
                if(user.password === password) {
                    return user;
                }

                return;
            }
        }
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
        const userData = this.storage.getItem(USER_STORAGE_KEY);

        if(!userData) {
            return;
        }

        return JSON.parse(userData);
    }

    getRole = () => {
        const user = this.getUser();

        if(!user) {
            return 'unauthorized';
        }

        return user.role;
    };

    isAccessGranted = (url) => {
        for(let i = 0; i < accessList.length; i++) {
            const { access, route } = accessList[i];
            const preparedUrl = url === '/' ? '' : url;

            if(route === preparedUrl) {
                if(access === 'all') {
                    return true;
                }

                if(access.indexOf(this.getRole()) !== -1) {
                    return true
                }
            }
        }

        return false;
    };
}

export default new Auth(window.localStorage);