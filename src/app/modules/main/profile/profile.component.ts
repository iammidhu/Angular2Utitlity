import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
    private userDetails: any;
    constructor() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        this.userDetails = user;
    }
}
