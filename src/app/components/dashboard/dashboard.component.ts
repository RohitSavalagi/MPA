import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
} from "@angular/core";
import { Dashboard } from "@core/models/dashboard.model";
import { DashboardService } from "@core/services/dashboard.service";


@Component({
    selector: "oe-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    data!: Dashboard[];
    completed: number = 0;
    btn!: HTMLElement | null;
    initialData!: Dashboard[];

    constructor(
        private dashboard: DashboardService,
        @Inject(DOCUMENT) private document: Document,
        private http: HttpClient
    ) {}

    ngOnInit(): void {

        this.http.get<Dashboard[]>("http://localhost:3000/dashboard").subscribe((res: Dashboard[]) => {
            this.initialData = res;
            this.data = res.slice(0, 2);
            this.dataExtraction();
        });

    }

    showMore(): void {
        this.data = this.dashboard.getData();
        this.btn = this.document.querySelector<HTMLElement>(".btn");
        if (this.btn) {
            this.btn.remove();
        }
    }

    dataExtraction(): void {
        for (const ele of this.initialData) {
            if (ele.status === "completed") {
                this.completed++;
            }
        }
    }

    toggleWeek(): void {
        this.document
            .querySelector(".progess__week-pop-up")
            ?.classList.toggle("progess__week-pop-up--active");
    }

    toggleMonth(): void {
        this.document
            .querySelector(".dashboard__pop-up")
            ?.classList.toggle("dashboard__pop-up--active");
    }

    toggleMonthPieChart(): void {
        this.document
            .querySelector(".dashboard__pie-chart__pop-up")
            ?.classList.toggle("dashboard__pie-chart__pop-up--active");
    }


}
