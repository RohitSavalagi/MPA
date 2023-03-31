import { DOCUMENT } from "@angular/common";
import {
    ChangeDetectionStrategy, Component, Inject, OnInit
} from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "@core/models/login.model";
import { User } from "@core/models/user.model";
import { UserService } from "@core/services/user.service";

@Component({
    selector: "oe-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
    data!: User[];
    pass!: string;
    login: Login = new Login("", "");
    userNameNotFound:  HTMLElement | null | undefined;
    passwordINCorrect:  HTMLElement | null | undefined;
    submitted: boolean = false;
    passMatch: boolean = false;

    constructor(
        private getUser: UserService,
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
    ) {}
    ngOnInit(): void {
        this.getUser.getDetails().subscribe((res: User[]) => {
            this.data = res;
        });
        this.userNameNotFound = this.document.querySelector<HTMLElement>(".login__error");
        this.passwordINCorrect = this.document.querySelector<HTMLElement>(".error__password");
    }

    onSubmit(): void {
        this.submitted = true;
        this.pass = "";
        this.data.forEach((element: User) => {
            if (
                element.userName === this.login.userName
            ) {
                this.pass = element.password;
            }
        });

        if (this.pass) {
            this.passMatch = this.login.password === this.pass; 
            if (this.passMatch) {
                void this.router.navigateByUrl("sidebar/dashboard");
            } else {
                if(this.passwordINCorrect){
                    this.passwordINCorrect.innerText = "Wrong Password";
                    this.document.querySelector(".login__label--password")?.classList.add("alert-danger");
                }
            }
        }
    }

}
