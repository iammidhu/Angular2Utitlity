import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { LoginComponent }  from './login.component';
import { HeaderComponent } from '../../theme/header/header.component';
import { FooterComponent } from '../../theme/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MdlModule
    ],
    declarations: [
        LoginComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [LoginComponent]
})

export class LoginModule { }
