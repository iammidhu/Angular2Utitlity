import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperComponent } from './wrapper.component';
import { HomeComponent } from '../home/home.component';
import { TaskComponent } from '../task/task.component';
import { TaskDetailsComponent } from '../task/task-details.component';
import { ProfileComponent } from '../profile/profile.component';

import { Authentication } from '../../../services/authentication.service';

const routes: Routes = [{
    path: 'zb',
    component: WrapperComponent,
    children: [{
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: "Home"
        }
    },{
    	path:'task',
    	component:TaskComponent,
        data: {
          breadcrumb: "Task"
        }
    },{
        path:'task/:id',
        component:TaskDetailsComponent,
        data: {
          breadcrumb: "Details"
        }
    },{
        path:'profile',
        component:ProfileComponent,
        data: {
          breadcrumb: "Profile"
        }
    }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WrapperRouting { }
