import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { HeaderModule } from '../../theme/header/header.module';

import { LoginComponent }  from './login.component';
import { FooterComponent } from '../../theme/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MdlModule,
        HeaderModule
    ],
    declarations: [
        LoginComponent,
        FooterComponent
    ],
    bootstrap: [LoginComponent]
})

export class LoginModule { }
