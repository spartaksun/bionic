'use strict';

import { find } from 'lodash';
import homePage from './pages/home/home.page';
import aboutPage from './pages/about/about.page';
import loginPage from './pages/login/login.page';

const pages = [
	homePage,
	aboutPage,
	loginPage,
];

class Router {
    init () {
        this.renderPage(window.location.hash);
    }

    renderPage (url) {
        const page = find(pages, { url });

        page ? page.render() : homePage.render();
    }
}

export default new Router();


