import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

const httpOptions = {
    Headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl = 'http://localhost:3000/tasks'


    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl)
    }

    deleteTask(task: Task): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.delete<Task>(url);
    }

    updateTaskReminder(task: Task): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.put<Task>(url, task);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }
}
