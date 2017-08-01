import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/main/login/login.component';
import { WrapperComponent } from './modules/main/wrapper/wrapper.component';
import { NotFoundComponent } from './modules/shared/notFound/notFound.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect URL
    { path: 'login', component: LoginComponent },
    { path: '404', component: NotFoundComponent },
    { path: 'zb', component: WrapperComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting {}
