'use strict';

import userList from './db/users.json';

let loginButton = document.getElementById('loginButton');
let closeButton = document.getElementById('close');


let LoginForm = function () {

    let isUser = (username, password) => {
        for(let i = 0; i < userList.length; i++) {
            let user = userList[i];
            if(user.username === username && user.password === password) {
                return user;
            }
        }

        return undefined;
    };

    let loginFormBlock = document.getElementById('loginForm');
    let usernameBlock = document.querySelector('#user .username');

    let show = () => {
        loginFormBlock.style.display = 'block';
    };
    let close = () => {
        loginFormBlock.style.display = 'none';
    };

    this.init = () => {
        usernameBlock.textContent = 'Guest';

        showLoginButton();

        loginButton.addEventListener('click', function () {
            show();
            hideLoginButton();
        });

        closeButton.addEventListener('click', () => {
            close();
            showLoginButton();
        });
    };

    return {
        init: this.init
    };

};

function showLoginButton () {
    loginButton.style.display = 'block';
}

function hideLoginButton () {
    loginButton.style.display = 'none';
}


export default new LoginForm();
