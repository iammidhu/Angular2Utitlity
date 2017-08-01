import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { NavService }   from '../../services/nav.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthenticationService, NavService]
})
export class HeaderComponent {
    @Input() isInnerPage: boolean;

    private username: string;
    private item = 1;

    constructor(private authenticationService: AuthenticationService, private router: Router, private navService: NavService) {
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

    public selectedNavItem(item: number) {
        console.log('selected nav item ' + item);
        this.navService.changeNav(item);
    }
}
