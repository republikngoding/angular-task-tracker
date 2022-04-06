import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskServices: TaskService) { }

    ngOnInit(): void {
        this.taskServices.getTasks().subscribe((r) => {
            this.tasks = r;
        });
    }

    deleteTask(task: Task) {
        this.taskServices
            .deleteTask(task)
            .subscribe(
                () => (this.tasks = this.tasks.filter(
                    (t) => t.id !== task.id)
                )
            );
    }

    toggleReminder(task: Task) {
        task.reminder = !task.reminder;
        this.taskServices.updateTaskReminder(task).subscribe();

    }


    addTask(task: Task) {
        this.taskServices.addTask(task).subscribe((r) => {
            this.tasks.push(task);
        })

    }

}
