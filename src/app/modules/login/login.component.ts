import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../_services/alert.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService, AlertService]
})
export class LoginComponent {

    user: any = {};

    constructor(private authenticationService: AuthenticationService, private alertService: AlertService, private router: Router, ) {

    }
    private doLogin() {
        let auth = this.authenticationService.login(this.user);
        if (auth) {
            this.router.navigate(['zb']);
        } else {
            this.alertService.alertMe('Username or password is incorrect');
        }
    }
}
