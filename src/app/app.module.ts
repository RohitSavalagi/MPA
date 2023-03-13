import { NgModule } from "@angular/core";
import {
    BrowserModule,
    EVENT_MANAGER_PLUGINS,
    HammerGestureConfig,
    HammerModule
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconModule } from "@core/utils/icon/icon.module";
import { UxButtonModule } from "@netcracker/ux-ng2/button";
import { UxHammerPluginPatchA6 } from "@netcracker/ux-ng2/patches";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        UxButtonModule,
        IconModule.forRoot({ path: "assets/symbol/sprite.svg" }),
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
