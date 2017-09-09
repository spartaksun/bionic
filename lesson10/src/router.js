'use strict';

import _ from 'lodash';
import homePage from './home/home.page';
import aboutPage from './about/about.page';

let pages = [homePage, aboutPage];

let init = ()=> {
	let url = window.location.hash;

	renderPage(url);
};

let renderPage = (hash) => {

	let page = _.find(pages, {url: hash});

	if (page) {
		page.render();
	} else {
		homePage.render();
	}
	// page ? page.render() : homePage.render();

};


export default { init, renderPage };


