import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { WrapperComponent } from './modules/wrapper/wrapper.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect URL
    { path: 'login', component: LoginComponent },
    { path: 'zb', component: WrapperComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting {}
