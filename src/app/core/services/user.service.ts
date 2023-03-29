import { HttpClient }  from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "@core/models/registration.model";
import { User } from "@core/models/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UserService {

    constructor(private http: HttpClient) { }

   
    addUser(data: Register): Observable<Register>{
        return this.http.post<Register>("http://localhost:3000/user", data);
    }

    getDetails(): Observable<User[]>{
        return this.http.get<User[]>("http://localhost:3000/user");
    }
}
