import { Component, Input  } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthenticationService]
})
export class HeaderComponent {
    @Input() isInnerPage: boolean;
    constructor(private authenticationService: AuthenticationService) {

    }

    private logoutUser() {
        this.authenticationService.logout();
    }
}
