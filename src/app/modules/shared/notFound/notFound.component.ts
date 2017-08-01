import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'not-found',
    templateUrl: './notFound.component.html',
    styleUrls: ['./notFound.component.scss']
})
export class NotFoundComponent {
    constructor(private router: Router) {
    }
    goBack(){
      this.router.navigate(['/zb/home']);
    }
}
