import { Task } from '../types/task.type';

export const TASKS: Task[] = [{
    taskId: 36371,
    name: "Install Windows In Machine",
    dueDate: "2017-04-21T23:59:59",
    burnedHours: "0/5",
    estimatedHours: 18000000, // Multiples of 3600000 should show as (burnedHours/3600000)/(estimatedHours/3600000)
    status: "Delayed",
    PercentageCompleted: 6.67,
    createDate: "2017-04-20T06:56:31.82",
    isAssigned: true
}, {
    taskId: 36372,
    name: "Task1",
    dueDate: "2017-04-29T23:59:59",
    burnedHours: "6/8",
    estimatedHours: 18000000,
    status: "Delayed",
    PercentageCompleted: 47.78,
    createDate: "2017-04-20T06:56:31.82",
    isAssigned: true
}, {
    taskId: 36373,
    name: "Testing for description length",
    dueDate: "2017-05-29T23:59:59",
    burnedHours: "12/12",
    estimatedHours: 18000000,
    status: "Completed",
    PercentageCompleted: 17.78,
    createDate: "2017-04-20T06:56:31.82",
    isAssigned: false
}, {
    taskId: 36374,
    name: "Task2",
    dueDate: "2017-04-29T23:59:59",
    burnedHours: "12/12",
    estimatedHours: 18000000,
    status: "Completed",
    PercentageCompleted: 7.78,
    createDate: "2017-04-20T06:56:31.82",
    isAssigned: false
}, {
    taskId: 36375,
    name: "Test Task",
    dueDate: "2017-05-02T23:59:59",
    burnedHours: "6/12",
    estimatedHours: 18000000,
    status: "Delayed",
    PercentageCompleted: 87.78,
    createDate: "2017-04-20T06:56:31.82",
    isAssigned: true
}, {
    taskId: 36376,
    name: "Testing attachment is Done",
    dueDate: "2017-06-02T23:59:59",
    burnedHours: "5/12",
    estimatedHours: 18000000,
    status: "Delayed",
    PercentageCompleted: 47.78,
    createDate: "2017-05-20T06:56:31.82",
    isAssigned: false
}];
