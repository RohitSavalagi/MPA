import { Injectable } from "@angular/core";
import { Dashboard } from "@core/models/dashboard.model";

@Injectable({
    providedIn: "root",
})
export class DashboardService {
    data: Dashboard[] = [
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "completed",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "completed",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "progress",
            items: 25,
            photo: "img/image 3.svg",
        },
        {
            name: "Aldrich Vogel",
            task: "Berlin University iPad Pro 2020",
            location: "Germany, Berlin, Kaiserswerther Str. 16-18,",
            status: "completed",
            items: 25,
            photo: "./../../../assets/images/icons/image 3.svg",
        },
    ];

    constructor() {}

    getData(): Dashboard[] {
        return this.data;
    }
}
