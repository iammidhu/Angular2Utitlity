import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NOTIFICATION } from '../../data/mock.notificationList.data';
import { DATA } from '../../data/mock.data';
import { Notification } from '../../types/notification.type';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    private notificationList: Notification[];
    private canShowDelete: boolean;
    private dataList: any[];
    private index: number;

    constructor() {
        this.index = 0;
        this.canShowDelete = false;
        this.notificationList = this.duplicateArray(NOTIFICATION);
        this.dataList = this.duplicateArray(DATA);
        this.formatDataList();
    }
    private formatDataList(): void {

        let queue = this.dataList

        let result = [];
        let i = 0;
        let Feb = [];
        let March = [];
        let April = [];
        let May = [];

        for (let d of queue) {
            let theDate = new Date(d.DateTime);
            if (theDate.getMonth() == 4)
                Feb.push(d);
            // else if (theDate.getMonth() == 2)
            //     March.push(d);
            // else if (theDate.getMonth() == 3)
            //     April.push(d);
            // else if (theDate.getMonth() == 4)
            //     May.push(d);
        }
        let a = [];
        for (let date = 1; date <= 31; date++) {
            a[date] = Feb.filter((x) => {
                return x.DateTime.split('/')[1] === date.toString();
            })
        }
        // console.log(a);
        for (let day of a) {
            if (day && day.length == 96) {
                let eachDay = [];
                let sum = 0, avg = 0;
                for (let d = 0, i = 0; d <= day.length; d++) {
                    let obj = {};
                    if (d % 4 == 0 && d != 0) {
                        obj = {
                            "hour": i,
                            "average": (sum / 4)
                        };
                        eachDay.push(obj);
                        sum = 0, avg = 0;
                        i++;
                    } else
                        sum += day[d].PercentOccupied;
                }
                day["eachDay"] = eachDay;
            }
        }
        let newArray = [];
        for (let x of a) {
            if (x) {
                newArray.push(x['eachDay']);
            }
        }
        for (let eachDay of newArray) {
            if (eachDay) {
                let average = 0, sum = 0;
                for (let avg of eachDay) {
                    sum += avg.average;
                }
                average = sum / 24;
                eachDay['averagePerDay'] = average;
            }
        }
        console.log(JSON.stringify(newArray));

        // for (let x in newArray) {
        //     if (newArray[x]) {
        //         let index = parseInt(x) + 1;
        //         console.log("day" + index + "=" + newArray[x].averagePerDay)
        //     }
        // }
        // console.log(sum/19);
    }

    private showDelete() {
        let selectedArray = this.notificationList.filter((item: any) => item.selected == true);
        (selectedArray.length > 0) ? this.canShowDelete = true : this.canShowDelete = false;
    }

    private deleteItem() {
        this.notificationList = this.notificationList.filter((item) => {
            return item.selected == false;
        });
        this.showDelete();
    }

    private duplicateArray(items: Array<any>) {
        let arr: Array<any> = [];
        items.forEach(x => arr.push({...x}));
        return arr;
    }

}
