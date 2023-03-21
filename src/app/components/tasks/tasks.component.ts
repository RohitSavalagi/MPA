import {
    ChangeDetectionStrategy, Component 
} from "@angular/core";
import { Task } from "@core/models/tasks.model";

@Component({
    selector: "oe-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
    tasks: Task[] = [
        {
            title: "Berlin University iPad Pro 2020 (25 items)",
            status: "completed",
            duedate: "August 17, 2021",
            location: "Germany, Berlin, Rathausstraße 5",
            items: [
                "x12 iPad Pro 2020",
                " x12 Extended Apple Warranty (5 years)",
            ],
            avatar: "./../../../assets/images/icons/image 3.svg",
            handler: "Aldrich Vogel",
        },
        {
            title: "Berlin University iPad Pro 2020 (25 items)",
            status: "cancelled",
            duedate: "August 17, 2021",
            location: "Germany, Berlin, Rathausstraße 5",
            items: [
                "x12 iPad Pro 2020",
                " x12 Extended Apple Warranty (5 years)",
                "Delivery",
            ],
            avatar: "./../../../assets/images/icons/image 3.svg",

            handler: "Aldrich Vogel",
        },
        {
            title: "Berlin University iPad Pro 2020 (25 items)",
            status: "progress",
            duedate: "August 17, 2021",
            location: "Germany, Berlin, Rathausstraße 5",
            items: [
                "x12 iPad Pro 2020",
                " x12 Extended Apple Warranty (5 years)",
                "Delivery",
            ],
            avatar: "./../../../assets/images/icons/image 3.svg",
            handler: "Aldrich Vogel",
        },
        {
            title: "Berlin University iPad Pro 2020 (25 items)",
            status: "completed",
            duedate: "August 17, 2021",
            location: "Germany, Berlin, Rathausstraße 5",
            items: [
                "x12 iPad Pro 2020",
                " x12 Extended Apple Warranty (5 years)",
                "Delivery",
            ],
            avatar: "./../../../assets/images/icons/image 3.svg",
            handler: "Aldrich Vogel",
        },
    ];
}
