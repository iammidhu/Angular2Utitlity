import { Component, Output, EventEmitter  } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import {Directive} from '@angular/core';


@Directive({
  selector: 'button[counting]',
  host: {
    '(click)': 'onClick($event.target)'
  }
})
class CountClicks {
  numberOfClicks = 0;

  onClick() {
    debugger
    // console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}


@Component({
    selector: 'filter-data',
    templateUrl: './filterData.component.html',
    styleUrls: ['./filterData.component.scss'],
    providers: [MdlModule]
})
export class FilterDataComponent {
    @Output() search = new EventEmitter();
    public searchText: string;
    constructor() {
    }

    onEnter() {
        this.search.emit(this.searchText);
    }
}
