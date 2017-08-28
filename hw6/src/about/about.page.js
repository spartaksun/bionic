'use strict';

import Page from '../page';
import aboutPageContent from './about.page.html';

let aboutPage = new Page('#/about', aboutPageContent, '#page');

aboutPage.render();

export default aboutPage;