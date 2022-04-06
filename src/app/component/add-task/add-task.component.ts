import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/task';
@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

    @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
    text!: string;
    day!: string;
    reminder: boolean = false;
    showAddTask!: boolean;
    subscription: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService
            .onToggle()
            .subscribe((value) => {
                this.showAddTask = value;
            })
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (!this.text) {
            alert('Please Add a Task Gan');
            return;
        };

        const newTask: any = {
            text: this.text,
            day: this.day,
            reminder: this.reminder,
        };


        this.day = '';
        this.text = '';
        this.reminder = false;

        this.onAddTask.emit(newTask);
    }

}
