import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.type';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [TaskService]
})

export class TaskComponent implements OnInit {
    taskList: Task[];
    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.initTaskList();
    }

    private initTaskList(): void {
        this.taskService.getAllTask()
        	.then(tasks => this.taskList = tasks);
    }
}
