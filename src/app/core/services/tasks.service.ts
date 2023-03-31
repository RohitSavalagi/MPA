import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "@core/models/tasks.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TasksService {

    constructor(private http: HttpClient) {}

    getData(): Observable<Task[]> {
        return this.http.get<Task[]>("http://localhost:3000/tasks");
    }
}
