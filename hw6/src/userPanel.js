'use strict';

class UserPanel {

    constructor(auth) {
        this.auth = auth;
    }

    init = () => {
        const user = this.auth.getUser();

        if(user) {
            this.username = user.fullName;
        } else {
            this.username = 'Guest';
        }

        this.render();
    };

    render() {
        document.querySelector('.username')
            .innerHTML = this.username;
    }
}

export default UserPanel;