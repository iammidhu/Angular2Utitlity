import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { ProfileComponent } from './profile.component';
import { FilterDataComponent } from '../../shared/filter/filterData.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MdlModule
    ],
    declarations: [
        ProfileComponent,
        FilterDataComponent
    ],
    bootstrap: [ProfileComponent]
})

export class ProfileModule { }
