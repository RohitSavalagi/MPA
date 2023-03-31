import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "@core/models/product.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ProductsService {

    constructor( private http: HttpClient) {}

    getData(): Observable<Product[]> {
        return this.http.get<Product[]>("http://localhost:3000/products");
    }

}
