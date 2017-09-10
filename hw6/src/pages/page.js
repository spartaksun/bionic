'use strict';

class Page {
	constructor(url = '', content = '') {
		this.url = url;
		this.content = content;
	}

	render = () => {
		this.beforeRender();

		document.querySelector('#page')
			.innerHTML = this.content;

        this.afterRender();
	};

	beforeRender = () => {};
	afterRender = () => {};

	setAuth = (auth) => {
		this.auth = auth;
	}
}

export default Page;