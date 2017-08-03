import { Component } from '@angular/core';

import { NOTIFICATION } from '../../../data/mock.notificationList.data';
import { Notification } from '../../../types/notification.type';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    // styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    private notificationList: Notification[];
    private canShowDelete: boolean;
    public title: string = "Home";

    constructor() {
        this.canShowDelete = false;
        this.notificationList = this.duplicateArray(NOTIFICATION);
    }

    private showDelete() {
        let selectedArray = this.notificationList.filter((item: Notification) => item.selected == true);
        this.canShowDelete = (selectedArray.length > 0);
    }

    private deleteItem() {
        this.notificationList = this.notificationList.filter((item: Notification) => {
            return item.selected == false;
        });
        this.showDelete();
    }

    public duplicateArray(items: Array<Notification>) {
        let arr: Array<Notification> = [];
        items.forEach(x => arr.push({...x}));
        return arr;
    }

}
