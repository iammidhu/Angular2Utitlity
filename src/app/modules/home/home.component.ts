import { Component } from '@angular/core';

import { NOTIFICATION } from '../../data/mock.notificationList.data';
import { Notification } from '../../types/notification.type';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    private notificationList: Notification[];
    private canShowDelete: boolean;

    constructor() {
        this.canShowDelete = false;
        this.notificationList = NOTIFICATION;
    }
    private showDelete() {
        this.canShowDelete = true;
    }

    private deleteItem() {

    }
}
