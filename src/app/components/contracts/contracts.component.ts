import { DOCUMENT } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
} from "@angular/core";
import { Contracts } from "@core/models/contracts.model";

@Component({
    selector: "oe-contracts",
    templateUrl: "./contracts.component.html",
    styleUrls: ["./contracts.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractsComponent {

    contracts: Contracts[] = [
        {
            title: "Deutsche Bundespost. Apple products monthly discount",
            status: "signed",
            company: "Deutsche Bundespost",
            location: "Germany, Berlin, Rathausstraße 5",
            contract: "Show conditions",
            assignee: "Haydn Schäfer",
            handler: "Aldrich Vogel",
            avatar: "./../../../assets/images/icons/Avatar Profile.png",
        },
        {
            title: "Deutsche Bundespost. Apple products monthly discount",
            status: "building",
            company: "Deutsche Bundespost",
            location: "Germany, Berlin, Rathausstraße 5",
            contract: "Show conditions",
            assignee: "Haydn Schäfer",
            handler: "Aldrich Vogel",
            avatar: "./../../../assets/images/icons/Avatar Profile.png",
        },
        {
            title: "Deutsche Bundespost. Apple products monthly discount",
            status: "signed",
            company: "Deutsche Bundespost",
            location: "Germany, Berlin, Rathausstraße 5",
            contract: "Show conditions",
            assignee: "Haydn Schäfer",
            handler: "Aldrich Vogel",
            avatar: "./../../../assets/images/icons/Avatar Profile.png",
        },
    ];

    constructor(@Inject(DOCUMENT) private document: Document) {}


    openPopup(): void {
        this.document.querySelector<HTMLElement>(".popup")?.classList.add("popup--active");
        this.document.querySelector<HTMLElement>(".form")?.classList.add("form--active");
    }

    cancel(): void {
        this.document.querySelector<HTMLElement>(".popup")?.classList.remove("popup--active");
        this.document.querySelector<HTMLElement>(".form")?.classList.remove("form--active");
    }
}
