import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title = 'task-tracker';
    showAddTask!: boolean;
    subscription!: Subscription;

    constructor(private uiService: UiService, private router: Router) { }

    ngOnInit(): void {
    }


    toggleAddTask() {
        this.uiService.toggleAddTask();
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }
}
