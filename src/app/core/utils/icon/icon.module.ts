import { CommonModule } from "@angular/common";
import {
    ModuleWithProviders,
    NgModule
} from "@angular/core";
import { IconService } from "@core/utils/icon/icon.service";
import { IconSpriteConfig } from "@core/utils/icon/models/icon-sprite-config";

import { IconComponent } from "./icon.component";

@NgModule({
    imports: [CommonModule],
    declarations: [IconComponent],
    providers: [IconService],
    exports: [IconComponent]
})
export class IconModule {
    public static forRoot(config: IconSpriteConfig): ModuleWithProviders<IconModule> {
        return {
            ngModule: IconModule,
            providers: [
                {
                    provide: IconSpriteConfig,
                    useValue: config
                }
            ]
        };
    }
}
