'use strict';

import _ from 'lodash';
import router from './router';

const init = ()=>{
    let menuItems = document.querySelectorAll('#menu a');

    _.each(menuItems, (item) => {
        item.addEventListener('click', function(event){
            let hash = this.getAttribute('href');

            router.renderPage(hash);
        });
    });
};

export default { init };

