import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit
} from "@angular/core";
import { Task } from "@core/models/tasks.model";
import { TasksService } from "@core/services/tasks.service";

@Component({
    selector: "oe-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit{
    tasks!: Task[];
    constructor(
        private ref: ChangeDetectorRef,
        private taskService: TasksService
    ){}

    ngOnInit(): void {
        this.taskService.getData().subscribe((res: Task[]) => {
            this.tasks = res;
            this.ref.detectChanges();
        });
    }
}
