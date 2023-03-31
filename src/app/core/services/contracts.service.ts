import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contracts } from "@core/models/contracts.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class ContractsService {

    constructor(private http: HttpClient) {}

    getData(): Observable<Contracts[]> {
        return this.http.get<Contracts[]>("http://localhost:3000/contracts");
    } 
}
