'use strict';

import Auth from '../../auth';


class LoginForm {

    constructor() {
        this.submitButton = document.getElementById('submitButton');
        this.loginMessage = document.getElementById('loginMessage');
        this.usernameBlock = document.getElementById('username');
    }

    setMessage (message, color = '#000') {
        this.loginMessage.textContent = message;
        this.loginMessage.style.color = color;
    }

    resetMessage () {
        this.setMessage('');
    }

    initUserMessage (user) {
        if(user) {
            this.setFullname(user.fullName);
            this.resetMessage();
        } else {
            this.setMessage('Invalid username or password!', 'red');
        }
    }

    initSubmitButton () {

        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            this.initUserMessage(
                Auth.login(login, password)
            );
        });
    }

    setFullname (name) {
        this.usernameBlock.textContent = name;
    }

    init () {
        this.setFullname('Guest');
        this.setMessage('Please fill login and passowrd');

        this.initSubmitButton();
    }
}

export default LoginForm;
