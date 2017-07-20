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
    redirectTo: '/zb/home',
    pathMatch: 'full',
    canActivate: [Authentication]
}, {
        path: 'zb',
        component: WrapperComponent,
        children: [{
            path: 'home',
            component: HomeComponent,
            canActivate: [Authentication],
            data: {
                breadcrumb: "Home"
            }
        }, {
                path: 'task',
                component: TaskComponent,
                canActivate: [Authentication],
                data: {
                    breadcrumb: "Task"
                }
            }, {
                path: 'task/:id',
                component: TaskDetailsComponent,
                canActivate: [Authentication],
                data: {
                    breadcrumb: "Details"
                }
            }, {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [Authentication],
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
