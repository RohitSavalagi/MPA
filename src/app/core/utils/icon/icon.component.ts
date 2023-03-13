import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges
} from "@angular/core";

import { IconService } from "./icon.service";

@Component({
    selector: "oe-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
    @Input()
    public src: string = "";

    @Input()
    public title: string = "";

    @Input()
    public width: string = "100%";

    @Input()
    public height?: string;

    @Input()
    public  className: string = "";

    @Input()
    public preserveAspectRatio: string = "xMinYMax meet";

    constructor(private readonly iconSpriteService: IconService) {
    }

    ngOnChanges(): void {
        if (this.src && !this.src.includes("#") && this.iconSpriteService.spritePath) {
            this.src = `${this.iconSpriteService.getPath()}#${this.src}`;
        }
    }
}
