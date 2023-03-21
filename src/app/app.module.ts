import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { 
    ReactiveFormsModule,
    FormsModule
} from "@angular/forms";
import {
    BrowserModule,
    EVENT_MANAGER_PLUGINS,
    HammerGestureConfig,
    HammerModule
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { IconModule } from "@core/utils/icon/icon.module";
import { UxButtonModule } from "@netcracker/ux-ng2/button";
import { UxHammerPluginPatchA6 } from "@netcracker/ux-ng2/patches";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContractsComponent } from "./components/contracts/contracts.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderSidebarComponent } from "./components/header-sidebar/header-sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { TasksComponent } from "./components/tasks/tasks.component";


@NgModule({
    declarations: [AppComponent, LoginComponent, HeaderSidebarComponent, DashboardComponent, TasksComponent, ProductsComponent, ContractsComponent, RegistrationComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        UxButtonModule,
        IconModule.forRoot({ path: "assets/symbol/sprite.svg" }),
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        HammerGestureConfig,
        // Fix hammerjs bugs
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: UxHammerPluginPatchA6,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
