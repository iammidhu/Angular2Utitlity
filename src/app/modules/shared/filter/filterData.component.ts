import { Component, Output, EventEmitter  } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

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
