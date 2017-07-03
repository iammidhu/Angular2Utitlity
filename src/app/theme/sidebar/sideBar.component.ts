import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'side-bar',
    templateUrl: './sideBar.component.html',
    styleUrls: ['./sideBar.component.scss']
})

export class SideBarComponent {
    private currentTab : string;
    constructor(private router: Router) {
        this.bindRouteChange(router);
    }

    private bindRouteChange(router: Router) :void{
        router.events.subscribe((route) => {
            if (route instanceof NavigationEnd){
                this.currentTab = route.url.split("/")[2];
            }
        });
    }
}
