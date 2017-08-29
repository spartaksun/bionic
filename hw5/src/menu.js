'use strict';

import _ from 'lodash';
import router from './router';


const menuItems = [
    {
        title: 'Home',
        route: '/',
        access: ['admin', 'user']
    },
    {
        title: 'About',
        route: '#/about',
        access: ['admin', 'user']
    },
    {
        title: 'Login',
        route: '#/login',
        access: ['incognito']
    }
];


const init = () => {

    const parentElement = document.getElementById('menu');
    _.each(menuItems, (item) => {
        let li = document.createElement('li');
        let link = document.createElement('a');

        link.textContent = item.title;
        link.setAttribute('href', item.route);
        link.addEventListener('click', function(event) {
            router.renderPage(item.route);
        });

        li.appendChild(link);
        parentElement.appendChild(li);
    });
};

export default { init };




