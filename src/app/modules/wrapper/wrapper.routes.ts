import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperComponent } from './wrapper.component';
import { HomeComponent } from '../home/home.component';
import { TaskComponent } from '../task/task.component';

const routes: Routes = [{
	path:'zb',
	redirectTo:'/zb/home',
	pathMatch: 'full'
},{
    path: 'zb',
    component: WrapperComponent,
    children: [{
        path: 'home',
        component: HomeComponent,
    },{
    	path:'task',
    	component:TaskComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WrapperRouting {}
