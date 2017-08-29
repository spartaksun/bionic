'use strict';

const DEFAULT_SELECTOR = '#page';


class Page {
	constructor(url = '', content = '', selector = DEFAULT_SELECTOR) {
		this.url = url;
		this.content = content;
		this.selector = selector;

	}

	render(){
		let parentElement = document.querySelector(this.selector);

		parentElement.innerHTML = this.content;
	}
}

export default Page;