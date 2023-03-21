import {
    ChangeDetectionStrategy, 
    Component,
    OnInit 
} from "@angular/core";
import {
    FormControl, FormGroup, Validators 
} from "@angular/forms";

@Component({
    selector: "oe-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup | undefined;

    constructor() {}

    ngOnInit(): void {
        this.loginForm = new FormGroup(
            {
                name: new FormControl( "" ,Validators.required),
                password: new FormControl("", Validators.required)
            }
        );
    }

}
