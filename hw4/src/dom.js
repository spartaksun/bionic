'use strict';

let parentNode = document.querySelector('.parent');

parentNode.addEventListener('click', function (event) {
    let target = event.target;

    if(target.getAttribute('class') === 'box') {
        target.remove();
    } else {
        let block = document.createElement('div');

        block.setAttribute('class', 'box');
        parentNode.appendChild(block);
    }
});