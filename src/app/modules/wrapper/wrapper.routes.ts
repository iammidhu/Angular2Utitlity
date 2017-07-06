import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperComponent } from './wrapper.component';
import { HomeComponent } from '../home/home.component';
import { TaskComponent } from '../task/task.component';

import { Authentication } from '../../_services/authentication.service';

const routes: Routes = [{
    path: 'zb',
    redirectTo: '/zb/home',
    pathMatch: 'full',
    canActivate: [Authentication]
}, {
        path: 'zb',
        component: WrapperComponent,
        canActivate: [Authentication],
        children: [{
            path: 'home',
            component: HomeComponent,
        }, {
                path: 'task',
                component: TaskComponent,
                canActivate: [Authentication]
            }]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WrapperRouting { }
