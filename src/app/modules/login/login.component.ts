import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from '../../_services/toast.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService, ToastService]
})
export class LoginComponent {

    private user: any = {};

    constructor(private authenticationService: AuthenticationService, private toastService: ToastService, private router: Router, ) {

    }
    private doLogin() {
        let auth = this.authenticationService.login(this.user);
        if (auth) {
            this.router.navigate(['zb/home']);
        } else {
            this.toastService.toastMe('Username or password is incorrect');
        }
    }
}
