"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var home_module_1 = require("../home/home.module");
var task_module_1 = require("../task/task.module");
var header_module_1 = require("../../theme/header/header.module");
var authentication_service_1 = require("../../_services/authentication.service");
var wrapper_component_1 = require("./wrapper.component");
var sideBar_component_1 = require("../../theme/sidebar/sideBar.component");
var wrapper_routes_1 = require("./wrapper.routes");
var WrapperModule = (function () {
    function WrapperModule() {
    }
    return WrapperModule;
}());
WrapperModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            home_module_1.HomeModule,
            task_module_1.TaskModule,
            wrapper_routes_1.WrapperRouting,
            header_module_1.HeaderModule
        ],
        declarations: [
            wrapper_component_1.WrapperComponent,
            sideBar_component_1.SideBarComponent
        ],
        bootstrap: [wrapper_component_1.WrapperComponent],
        providers: [authentication_service_1.Authentication]
    })
], WrapperModule);
exports.WrapperModule = WrapperModule;
//# sourceMappingURL=wrapper.module.js.map