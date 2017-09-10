'use strict';

import Page from '../page';
import adminPageContent from './admin.page.html';

class AdminPage extends Page {
    constructor(url){
        super(url);
        this.content = adminPageContent;
    }

    afterRender = () => {

        const userBlock = document.getElementById('users');
        const users = document.createElement('ul');

        const userList = this.auth.getUserList();

        for (let i = 0; i < userList.length; i ++) {
            const element = document.createElement('li');
            element.textContent = userList[i].fullName;
            users.appendChild(element);
        }

        userBlock.appendChild(users);
    };
}

const page = new AdminPage('#/admin');

export default page;