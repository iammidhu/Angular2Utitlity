import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { TaskService } from '../../../services/task.service';
import { NavService }   from '../../../services/nav.service';

import { Task } from '../../../types/task.type';

@Component({
    selector: 'task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss'],
    providers: [TaskService, NavService]
})

export class TaskDetailsComponent implements OnInit {
    private task: Task;
    private item: number;
    private toolTipText: string;
    private subscription: Subscription;
    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location,
        private navService: NavService
    ) { }

    ngOnInit(): void {
        this.initGetTaskById();
        this.toolTipText = "Go back";
        this.subscription = this.navService.navItem$
            .subscribe(item => this.item = item);
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }

    private initGetTaskById(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.taskService.getTaskById(+params.get('id')))
            .subscribe(task => this.task = task);
    }

    private goBack(): void {
        this.location.back();
    }
}
