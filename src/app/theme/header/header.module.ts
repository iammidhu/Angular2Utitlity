import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { HeaderComponent }     from './header.component';

@NgModule({
    imports: [
        BrowserModule,
        MdlModule
    ],
    declarations: [
        HeaderComponent
    ],
    bootstrap: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule { }
