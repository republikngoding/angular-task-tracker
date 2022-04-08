import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/task';


@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

    @Input()
    task!: Task;
    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

    faTimes = faTimes;

    constructor() { }

    ngOnInit(): void {
    }

    onDelete(task: any) {
        this.onDeleteTask.emit();
    }

    onToggle(task: any) {
        this.onToggleReminder.emit(task);
    }

}