import {
    ChangeDetectionStrategy,
    Component 
} from "@angular/core";

@Component({
    selector: "oe-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {

    constructor() { }

}
