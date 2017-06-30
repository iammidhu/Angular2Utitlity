import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
 
import { TaskComponent }     from './task.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TaskComponent
  ],
  bootstrap: [ TaskComponent ]
})

export class TaskModule {}
