import {
    ChangeDetectionStrategy,
    Component,
    OnInit
} from "@angular/core";
import { Router } from "@angular/router"; 
import { Register } from "@core/models/registration.model";
import { User } from "@core/models/user.model";
import { UserService } from "@core/services/user.service";

@Component({
    selector: "oe-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit{
    data!: User[];
    emailExisit!: boolean;
    registerFrom!: Register;
    
    constructor(
        private post: UserService,
        private router: Router    
    ) { }

    ngOnInit(): void {
        this.registerFrom = new Register("", "", "", "", "");
        this.post.getDetails().subscribe((res: User[]) => {
            this.data = res;
        });
    }

    onSubmit(): void{
        this.emailExisit = false;
        this.data.forEach((ele: User) => {
            if(ele.email === this.registerFrom.email){
                this.emailExisit = true;
            }
        });
        if(this.emailExisit){
            // eslint-disable-next-line no-undef
            alert("This Email Already Exists");
        } else{
            this.post.addUser(this.registerFrom).subscribe(() => {
            });
            void this.router.navigateByUrl("sidebar/dashboard");
        }
    }
    
    validateUserName(): void{
    //    if(this.loginForm?.value.userName === this.data[0].userName){
    //     alert("UserName")
    //    }
    }

}
