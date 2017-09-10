'use strict';

import router from './router';
import Menu from './menu';
import UserPanel from './userPanel';
import auth from './auth';

class App {

    init = () => {

        const userPanel = new UserPanel(auth);
        userPanel.init();

        const menu = new Menu(router, auth);
        menu.init();

        router.handleChangeRoute = function (url) {
            userPanel.init();
            menu.init();
        };

    };
}

export default App;