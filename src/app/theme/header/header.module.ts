import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HeaderComponent }     from './header.component';
import { BreadcrumbComponent }     from './breadcrumb.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent
  ],
  bootstrap: [ HeaderComponent ],
  exports: [HeaderComponent]
})

export class HeaderModule {}
