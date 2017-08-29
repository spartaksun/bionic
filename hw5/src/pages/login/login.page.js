'use strict';

import Page from '../page';
import pageContent from './login.page.html';
import LoginForm from './form';

class LoginPage extends Page {
    constructor(url){
        super(url);
        this.content = pageContent;
    }

    render() {
        super.render();

        const loginForm = new LoginForm();
        loginForm.init();
    }
}

const page = new LoginPage('#/login');

export default page;