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
var core_1 = require("@angular-mdl/core");
var core_2 = require("@angular/core");
var ToastService = (function () {
    function ToastService(mdlSnackbarService) {
        this.mdlSnackbarService = mdlSnackbarService;
    }
    ToastService.prototype.toastMe = function (message) {
        this.mdlSnackbarService.showSnackbar({
            message: message,
        });
    };
    return ToastService;
}());
ToastService = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [core_1.MdlSnackbarService])
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map