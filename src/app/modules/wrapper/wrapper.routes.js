"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var wrapper_component_1 = require("./wrapper.component");
var home_component_1 = require("../home/home.component");
var task_component_1 = require("../task/task.component");
var authentication_service_1 = require("../../_services/authentication.service");
var routes = [{
        path: 'zb',
        redirectTo: '/zb/home',
        pathMatch: 'full',
        canActivate: [authentication_service_1.Authentication]
    }, {
        path: 'zb',
        component: wrapper_component_1.WrapperComponent,
        canActivate: [authentication_service_1.Authentication],
        children: [{
                path: 'home',
                component: home_component_1.HomeComponent,
            }, {
                path: 'task',
                component: task_component_1.TaskComponent,
                canActivate: [authentication_service_1.Authentication]
            }]
    }];
var WrapperRouting = (function () {
    function WrapperRouting() {
    }
    return WrapperRouting;
}());
WrapperRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], WrapperRouting);
exports.WrapperRouting = WrapperRouting;
//# sourceMappingURL=wrapper.routes.js.map