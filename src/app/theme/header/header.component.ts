import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthenticationService]
})
export class HeaderComponent {
    @Input() isInnerPage: boolean;

    private username: string;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user)
            this.username = user.name;
    }
    public gotoProfile() {
        this.router.navigate(['zb/profile']);
    }
    private logoutUser() {
        this.authenticationService.logout();
    }
}
