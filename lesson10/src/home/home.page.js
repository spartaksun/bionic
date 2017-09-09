'use strict';

import Page from '../page';
import homePageContent from './home.page.html';
import handlebars from 'handlebars/dist/handlebars.min';

import content from './content.page.html';

class HomePage extends Page {
	constructor(url){
		super(url);
		this.content = homePageContent;
	}

    init() {
        let template = handlebars.compile(content);
        let context = {
            body: 'test body <h1>Test 2</h1>"',
            title: 'test title'
        };

        this.content = template(context);
    }
}


let homePage = new HomePage('#/');

export default homePage;