import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from '../../../services/toast.service';
import { AuthenticationService } from '../../../services/authentication.service';

declare const gapi: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService, ToastService]
})
export class LoginComponent {

    private user: any = {};
    // private clientId: string = '529530000480-ftgvbv3ep4sei7sl2hf5kb15cs92rc9l.apps.googleusercontent.com';
    // public auth2: any;
    //
    // private scope = [
    //     'profile',
    //     'email',
    //     'https://www.googleapis.com/auth/plus.me',
    //     'https://www.googleapis.com/auth/contacts.readonly',
    //     'https://www.googleapis.com/auth/admin.directory.user.readonly'
    // ].join(' ');



    constructor(private authenticationService: AuthenticationService, private toastService: ToastService, private router: Router, private element: ElementRef) {

    }

    // public googleInit() {
    //     let that = this;
    //     gapi.load('auth2', function() {
    //         that.auth2 = gapi.auth2.init({
    //             client_id: that.clientId,
    //             cookiepolicy: 'single_host_origin',
    //             scope: that.scope
    //         });
    //         that.attachSignin(that.element.nativeElement.firstChild);
    //     });
    // }
    // public attachSignin(element: any) {
    //     let that = this;
    //     this.auth2.attachClickHandler(element, {},
    //         function(googleUser: any) {
    //
    //             let profile = googleUser.getBasicProfile();
    //             console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //             console.log('ID: ' + profile.getId());
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail());
    //             //YOUR CODE HERE
    //
    //
    //         }, function(error: any) {
    //             console.log(JSON.stringify(error, undefined, 2));
    //         });
    // }
    //
    //
    // ngAfterViewInit() {
    //     this.googleInit();
    // }

    private doLogin() {
        let auth = this.authenticationService.login(this.user);
        if (auth) {
            this.router.navigate(['zb/home']);
        } else {
            this.toastService.toastMe('Username or password is incorrect');
        }
    }
}
