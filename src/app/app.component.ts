import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    VERSION
} from "@angular/core";

@Component({
    selector: "oe-root",
    styleUrls: ["./app.component.less"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @HostBinding("class.app")
    public _hostClass: boolean = true;

    public title: string = `ux-ng2 Project Template A ${VERSION.major}`;

    public _click(): void {
    }
}
