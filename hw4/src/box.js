'use strict';

const BOX_CLASS = 'box';
const PARENT_BLOCK_CLASS = 'parent';

let parentNode = document.querySelector(`.${PARENT_BLOCK_CLASS}`);

/**
 * Set OnClick listeners on each box
 */
export function init() {
    parentNode.addEventListener('click', function (event) {
        let {target} = event;

        if (target.getAttribute('class') === BOX_CLASS) {

            logBlockIndex(target);
            target.remove();

        } else {
            appendChild(parentNode);
        }
    });
}

/**
 * Logs box index in console
 * @param target
 */
function logBlockIndex(target) {
    let childNodes = parentNode.querySelectorAll(`.${PARENT_BLOCK_CLASS}`);

    for (let i = 0; i < childNodes.length; i++) {
        if (target === childNodes[i]) {
            console.log(i);
        }
    }
}

/**
 * Adds a new box as last in parent block
 * @param parent
 */
function appendChild(parent) {
    let block = document.createElement('div');

    block.setAttribute('class', BOX_CLASS);
    block.setAttribute('style', `background-color: ${getRandomColor()}`);

    parent.appendChild(block);
}

/**
 * Random color generator
 * @returns {string}
 */
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 3; i++) {
        let c = letters[Math.floor(Math.random() * 16)];
        color += `${c}${c}`;
    }

    return color;
}