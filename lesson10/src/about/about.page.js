'use strict';

import Page from '../page';
import aboutPageContent from './about.page.html';
import $ from 'jquery';
import _ from 'lodash';

let aboutPage = new Page('#/about', aboutPageContent, '#page');

aboutPage.init = () => {
    return;

    $.ajax('https://api.citybik.es/v2/networks', {
        success: (data) => {
            const { networks } =  data;
            renderNetworks(networks);
        },
        error: () => {
            console.log('ERROR');
        }
    });
};

function renderNetworks (networks) {
    let ul = document.createElement('ul');

    for(let i = 0; i < networks.length; i++) {
        const network = networks[i];

        let li = document.createElement('p');
        let link = document.createElement('a');

        link.addEventListener('click', handleNetworkClick);
        link.setAttribute('href', network.href);
        link.textContent = network.name;

        li.appendChild(link);
        ul.appendChild(li);
    }

    document.getElementById('page').appendChild(ul);
}

function handleNetworkClick(e) {
    e.preventDefault();

    $.ajax('https://api.citybik.es' + e.target.getAttribute('href'))
        .then(data => renderNetwork(data.network));
}

function renderNetwork (network) {
    const { stations, company, location } = network;

    alert(stations.length +' '+ location.city +' '+ location.country +' '+ company);
}

aboutPage.render();

export default aboutPage;