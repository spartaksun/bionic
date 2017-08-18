'use strict';

import userList from './db/users.json';

let loginButton = document.getElementById('loginButton');
let closeButton = document.getElementById('close');


let LoginForm = function () {

    const findUser = (username, password) => {
        for(let i = 0; i < userList.length; i++) {
            let user = userList[i];
            if(user.username === username && user.password === password) {
                return user;
            }
        }

        return null;
    };

    const loginFormBlock = document.getElementById('loginModal');
    const submitButton = document.getElementById('submitButton');

    const setMessage = (message, color = '#000') => {
        const block = document.getElementById('loginMessage');

        block.textContent = message;
        block.style.color = color;
    };

    const resetMessage = () => {
        setMessage('');
    };

    const show = () => {
        loginFormBlock.style.display = 'block';
    };

    const close = () => {
        loginFormBlock.style.display = 'none';
    };

    const setFullname = (fullname) => {
        document.getElementById('username').textContent = fullname;
    };

    this.init = () => {
        setFullname('Guest');
        setMessage('Please fill login and passowrd');

        showLoginButton();

        loginButton.addEventListener('click', function () {
            show();
            hideLoginButton();
        });

        closeButton.addEventListener('click', () => {
            close();
            showLoginButton();
        });

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            let user = findUser(login, password);

            if(user) {
                setFullname(user.fullName);
                resetMessage();
                close();
            } else {
                setMessage('Invalid username or password!', 'red');
            }
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
