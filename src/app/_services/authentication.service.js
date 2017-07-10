"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mock_users_1 = require("../data/mock.users");
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.login = function (user) {
        var userFound = false, userDetails = {};
        var userList = mock_users_1.USERS;
        userDetails = userList.find(function (u) { return u.email === user.email && u.password === user.password; });
        if (userDetails) {
            userFound = true;
            localStorage.setItem('currentUser', JSON.stringify(userDetails));
        }
        return userFound;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    };
    AuthenticationService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var Authentication = (function () {
    function Authentication(router) {
        this.router = router;
    }
    Authentication.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser'))
            return true;
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return Authentication;
}());
Authentication = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], Authentication);
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.service.js.map