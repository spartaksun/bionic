'use strict';

const DEFAULT_SELECTOR = '#page';


class Page {
	constructor(url = '', content = '', selector = DEFAULT_SELECTOR) {
		this.url = url;
		this.content = content;
		this.selector = selector;

	}

	init() {

	}

	render(){
		let parentElement = document.querySelector(this.selector);
		this.init();

		parentElement.innerHTML = this.content;
	}
}

export default Page;