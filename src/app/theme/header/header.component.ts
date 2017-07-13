import { Component, Input  } from '@angular/core';

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

    constructor(private authenticationService: AuthenticationService) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user)
            this.username = user.name;
    }

    private logoutUser() {
        this.authenticationService.logout();
    }
}
