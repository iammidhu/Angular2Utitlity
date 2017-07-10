"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var mock_notificationList_data_1 = require("../../data/mock.notificationList.data");
var mock_data_1 = require("../../data/mock.data");
var HomeComponent = (function () {
    function HomeComponent() {
        this.index = 0;
        this.canShowDelete = false;
        this.notificationList = this.duplicateArray(mock_notificationList_data_1.NOTIFICATION);
        this.dataList = this.duplicateArray(mock_data_1.DATA);
        this.formatDataList();
    }
    HomeComponent.prototype.formatDataList = function () {
        var queue = this.dataList;
        var result = [];
        var i = 0;
        var Feb = [];
        // let March = [];
        // let April = [];
        // let May = [];
        for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
            var d = queue_1[_i];
            i++;
            var theDate = new Date(d.DateTime);
            if (theDate.getMonth() == 1)
                Feb.push(d);
            // else if(theDate.getMonth() == 2)
            //     March.push(d);
            // else if(theDate.getMonth() == 3)
            //     April.push(d);
            // else if(theDate.getMonth() == 4)
            //     May.push(d);
        }
        // console.log(Feb);
        var a = [];
        var _loop_1 = function (date) {
            a[date] = Feb.filter(function (x) {
                return x.DateTime.split('/')[1] === date.toString();
            });
        };
        for (var date = 1; date <= 31; date++) {
            _loop_1(date);
        }
        console.log(a);
        a.filter(function (y) {
        });
        for (var day in a) {
            if (day.length > 0) {
            }
        }
    };
    HomeComponent.prototype.processData = function (data) {
        console.log(data);
    };
    HomeComponent.prototype.showDelete = function () {
        var selectedArray = this.notificationList.filter(function (item) { return item.selected == true; });
        (selectedArray.length > 0) ? this.canShowDelete = true : this.canShowDelete = false;
    };
    HomeComponent.prototype.deleteItem = function () {
        this.notificationList = this.notificationList.filter(function (item) {
            return item.selected == false;
        });
        this.showDelete();
    };
    HomeComponent.prototype.duplicateArray = function (items) {
        var arr = [];
        items.forEach(function (x) { return arr.push(__assign({}, x)); });
        return arr;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map