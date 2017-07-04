import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { TASKS } from '../data/mock.taskList.data';

@Injectable()
export class TaskService {
    getAllTask(): Promise < Task[] > {
        return Promise.resolve(TASKS);
    }
}
