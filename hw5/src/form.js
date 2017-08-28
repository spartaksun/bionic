'use strict';

import userList from './db/users.json';

class LoginForm {

    constructor() {
        this.loginButton = document.getElementById('loginButton');
        this.closeButton = document.getElementById('close');
        this.submitButton = document.getElementById('submitButton');
        this.loginFormBlock = document.getElementById('loginModal');
        this.loginMessage = document.getElementById('loginMessage');
        this.usernameBlock = document.getElementById('username');
    }

    findUser = (username, password) => {
        for(let i = 0; i < userList.length; i++) {
            let user = userList[i];
            if(user.username === username && user.password === password) {
                return user;
            }
        }

        return null;
    };

    setMessage = (message, color = '#000') => {
        this.loginMessage.textContent = message;
        this.loginMessage.style.color = color;
    };

    resetMessage  = () => {
        this.setMessage('');
    };

    initUserMessage = (user) => {
        if(user) {
            this.setFullname(user.fullName);
            this.resetMessage();
            this.close();
        } else {
            this.setMessage('Invalid username or password!', 'red');
        }
    };

    initSubmitButton = () => {

        const that = this;
        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            this.initUserMessage(
                that.findUser(login, password)
            );
        });
    };

    show  = () => {
        this.loginFormBlock.style.display = 'block';
    };

    close = () => {
        this.loginFormBlock.style.display = 'none';
    };

    setFullname = (name) => {
        this.usernameBlock.textContent = name;
    };

    showLoginButton = () => {
        this.loginButton.style.display = 'block';
    };

    hideLoginButton = () =>  {
        this.loginButton.style.display = 'none';
    };

    initCloseButton = () =>  {
        const that = this;
        this.closeButton.addEventListener('click', () => {
            that.close();
            that.showLoginButton();
        });
    };

    initLoginButton = () =>  {
        this.showLoginButton();

        const that = this;
        this.loginButton.addEventListener('click', function () {
            that.show();
            that.hideLoginButton();
        });
    };

    init = () => {
        this.setFullname('Guest');
        this.setMessage('Please fill login and passowrd');

        this.initLoginButton();
        this.initCloseButton();
        this.initSubmitButton();
    }
}

export default new LoginForm();
