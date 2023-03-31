import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    OnInit,
} from "@angular/core";
import { Contracts } from "@core/models/contracts.model";
import { ContractsService } from "@core/services/contracts.service";

@Component({
    selector: "oe-contracts",
    templateUrl: "./contracts.component.html",
    styleUrls: ["./contracts.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractsComponent implements OnInit{

    contracts: Contracts[] = [];

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private http: HttpClient,
        private ref: ChangeDetectorRef,
        private contractSerice: ContractsService
    ) {}

    ngOnInit(): void {

        this.contractSerice.getData().subscribe((res: Contracts[]) => {
            this.contracts = res;
            this.ref.detectChanges();
        });

    }

    openPopup(): void {
        this.document.querySelector<HTMLElement>(".popup")?.classList.add("popup--active");
        this.document.querySelector<HTMLElement>(".form")?.classList.add("form--active");
    }

    cancel(): void {
        this.document.querySelector<HTMLElement>(".popup")?.classList.remove("popup--active");
        this.document.querySelector<HTMLElement>(".form")?.classList.remove("form--active");
    }
}
