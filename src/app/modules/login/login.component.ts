import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    @Output() userUpdated = new EventEmitter();

    user: any = {};

    constructor() {
    }

    doLogin() {
        this.userUpdated.emit(this.user);
    }
}
