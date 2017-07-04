import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor(private router: Router) { }

    login(user: any) {
        let userFound = false;
        let userDetails = {};
        let userList = [{
            "email": "midhun@qburst.com",
            "password": "123456",
            "name": "Midhun Jayan"
        },
            {
                "email": "nishin@qburst.com",
                "password": "nishin",
                "name": "Nishin Nishtar"
            },
            {
                "email": "hari@qburst.com",
                "password": "hari@123",
                "name": "Hari Krishnan"
            }
        ];

        for (let u of userList) {
            if (u.email == user.email && u.password == user.password) {
                userDetails = u;
                userFound = true;
            }
        }

        if (userDetails) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
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
