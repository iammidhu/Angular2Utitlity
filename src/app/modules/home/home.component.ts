import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    notificationList: any;
    canShowDelete: boolean;

    constructor() {
        this.canShowDelete = false;
        this.notificationList = [{
            id: 1,
            name: "A user has been deleted",
            type: 1
        },
            {
                id: 2,
                name: "A user has been created",
                type: 1
            }, {
                id: 3,
                name: "A new message received in general",
                type: 2
            }, {
                id: 4,
                name: "Your task has been updated by Jon Doe",
                type: 2
            },
            {
                id: 5,
                name: "A new task has assigned to you",
                type: 2
            }]
    }
    private showDelete() {
        this.canShowDelete = true;
    }

    private deleteItem() {

    }
}
