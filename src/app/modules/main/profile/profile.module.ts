import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { ProfileComponent }     from './profile.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MdlModule
    ],
    declarations: [
        ProfileComponent
    ],
    bootstrap: [ProfileComponent]
})

export class ProfileModule { }
