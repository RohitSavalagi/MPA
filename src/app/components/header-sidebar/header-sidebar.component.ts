import { DOCUMENT } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
} from "@angular/core";

@Component({
    selector: "oe-header-sidebar",
    templateUrl: "./header-sidebar.component.html",
    styleUrls: ["./header-sidebar.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSidebarComponent implements OnInit {
    sidebarToggler: Element | null | undefined;
    sidebar: Element | null | undefined;
    rightArrow: Element | null | undefined;
    sidebarText: NodeListOf<Element> | undefined;
    headerText: NodeListOf<Element> | undefined;
    sidebarBase!: HTMLElement | null;
    heading: HTMLElement | null | undefined;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {
        this.sidebarToggler = this.document.querySelector(
            ".sidebar__svg--toggle"
        );
        this.sidebar = this.document.querySelector(".sidebar");
        this.sidebarBase =
            this.document.querySelector<HTMLElement>(".sidebar__base");
        this.rightArrow =
            this.document.querySelector<HTMLElement>(".sidebar__rotate");
        this.sidebarText = this.document.querySelectorAll(".sidebar__text");
        this.headerText = this.document.querySelectorAll(".sidebar__logo");
        this.heading =
            this.document.querySelector<HTMLElement>(".sidebar__logo");
    }

    sidebarToggle(): void {
        this.sidebar?.classList.toggle("sidebar--shrink");
        this.sidebarBase?.classList.toggle("sidebar__base--shrink");
        this.rightArrow?.classList.toggle("sidebar__svg--active");

        if (this.heading?.innerText === "Feature Tester") {
            this.heading.innerText = "FT";
        } else {
            if (this.heading) {
                this.heading.innerText = "Feature Tester";
            }
        }
    }
}
