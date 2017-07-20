import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TaskService } from '../../../services/task.service';
import { Task } from '../../../types/task.type';

@Component({
    selector: 'task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss'],
    providers: [TaskService]
})

export class TaskDetailsComponent implements OnInit {
    task: Task;
    private toolTipText: string;
    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}

    ngOnInit(): void {
        this.initGetTaskById();
        this.toolTipText = "Go back";
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
