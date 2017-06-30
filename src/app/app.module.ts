import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';

import { WrapperModule } from './modules/wrapper/wrapper.module';
import { LoginModule } from './modules/login/login.module';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routes';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MdlModule,
        LoginModule,
        WrapperModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
