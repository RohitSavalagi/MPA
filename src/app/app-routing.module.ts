import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ContractsComponent } from "./components/contracts/contracts.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderSidebarComponent } from "./components/header-sidebar/header-sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "registration", component: RegistrationComponent },
            {
                path: "sidebar",
                component: HeaderSidebarComponent,
                children: [
                    { path: "dashboard", component: DashboardComponent },
                    { path: "tasks", component: TasksComponent },
                    { path: "products", component: ProductsComponent },
                    { path: "contracts", component: ContractsComponent },
                ],
            },
        ]),
    ],
})
export class AppRoutingModule {}
