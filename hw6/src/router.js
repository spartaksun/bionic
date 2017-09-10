'use strict';

import { find } from 'lodash';

import homePage from './pages/home/home.page';
import aboutPage from './pages/about/about.page';
import loginPage from './pages/login/login.page';
import adminPage from './pages/admin/admin.page';

import auth from './auth';

const pages = [
	homePage,
	aboutPage,
	loginPage,
    adminPage,
];

class Router {

    constructor(auth) {
        this.auth = auth;
        this.renderPage(window.location.hash);
    }

    handleChangeRoute = () => {};

    renderPage (url) {
        if(!this.auth.isAccessGranted(url)) {
            return this.goHome();
        }

        if(url === '#/logout') {
            this.auth.logout();
            return this.goHome();
        }

        let page = find(pages, { url });

        if(!page) {
            page = homePage;
        }

        page.setAuth(auth);
        page.render();

        this.handleChangeRoute(url);
    };

    goToUrl = (url) => {
        window.location.href = url;
        this.renderPage(url);

        this.handleChangeRoute(url);
    };

    goHome = () => {
        this.goToUrl('#/');
    };
}

export default new Router(auth);
