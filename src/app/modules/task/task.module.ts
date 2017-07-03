import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MdlModule } from '@angular-mdl/core';
 
import { TaskComponent }     from './task.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MdlModule
  ],
  declarations: [
    TaskComponent
  ],
  bootstrap: [ TaskComponent ],
  exports: [MdlModule]
})

export class TaskModule {}
