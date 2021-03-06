'use strict';

import router from '../../router';

class LoginForm {

    constructor(auth) {
        this.auth = auth;

        this.submitButton = document.getElementById('submitButton');
        this.loginMessage = document.getElementById('loginMessage');
    }

    setMessage (message, color = '#000') {
        this.loginMessage.textContent = message;
        this.loginMessage.style.color = color;
    }

    initSubmitButton () {
        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            const user = this.auth.login(login, password);

            if(user) {
                router.goHome();
            } else {
                this.setMessage('Invalid username or password!', 'red');
            }
        });
    }

    init () {
        this.setMessage('Please fill login and passowrd');
        this.initSubmitButton();
    }
}

export default LoginForm;
