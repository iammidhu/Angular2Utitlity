import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import '../assets/css/main.scss';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MdlModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
