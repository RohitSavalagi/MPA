import { Injectable } from "@angular/core";
import { Product } from "@core/models/product.model";

@Injectable({
    providedIn: "root",
})
export class ProductsService {
    data: Product[] = [
        {
            category: "Smartphones",
            img: "iPhone_12.png",
        },
        {
            category: "Laptops",
            img: "laptop.svg",
        },
        {
            category: "Smart Watches",
            img: "smart_watch.png",
        },
        {
            category: "Tablets",
            img: "Tablets.png",
        },
        {
            category: "PCs",
            img: "PCs.png",
        },
        {
            category: "Keyboards",
            img: "Keyboards.png",
        },
        {
            category: "Mice",
            img: "Mice.png",
        },
        {
            category: "Monitors",
            img: "Monitors.png",
        },
    ];

    constructor() {}

    getData(): Product[] {
        return this.data;
    }
}
