import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    VERSION
} from "@angular/core";

@Component({
    selector: "oe-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    @HostBinding("class.app") public _hostClass: string = true;

    public title: string = "ux-ng2 Project Template A" + VERSION.major;

    public _click(): void {
        window.alert("hello");
    }
}
