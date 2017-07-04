import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { USERS } from '../data/mock.users';

@Injectable()
export class AuthenticationService {
    constructor(private router: Router) { }

    login(user: any) {
        let userFound = false, userDetails = {};
        let userList = USERS;

        userDetails = userList.find((u: any) => u.email === user.email && u.password === user.password);
        if (userDetails) {
            userFound = true;
            localStorage.setItem('currentUser', JSON.stringify(userDetails));
        }

        return userFound;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }
}
