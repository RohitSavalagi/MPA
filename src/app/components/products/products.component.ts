import { DOCUMENT } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    Inject,
} from "@angular/core";
import { Product } from "@core/models/product.model";
import { ProductsService } from "@core/services/products.service";

@Component({
    selector: "oe-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
    carousel!: HTMLElement | null;
    carouselWidth!: number;
    cardCount: number = 0;
    offset: number = 0;
    maxX!: number;
    items!: Product[];

    constructor(
        private productsService: ProductsService,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit(): void {
        this.items = this.productsService.getData();
        this.carousel = this.document.querySelector<HTMLElement>(
            "[data-target='carousel']"
        );
        this.carouselWidth = this.document.querySelector<HTMLElement>(
            "[data-target='carousel']"
        )?.offsetWidth ?? 0;
        this.cardCount =
            this.carousel?.querySelectorAll("[data-target='card']")?.length ??
            0;
        this.maxX = -(
            this.cardCount * this.carouselWidth +
            0 * this.cardCount -
            this.carouselWidth -
            0
        );
    }
    leftButtonClick(): void {
        if (this.offset !== 0) {
            this.offset += this.carouselWidth;
            if (this.carousel) {
                this.carousel.style.transform = `translateX(${this.offset}px)`;
            }
        }
    }

    rightButtonClick(): void {
        if (this.offset !== this.maxX) {
            this.offset -= this.carouselWidth;
            if (this.carousel) {
                this.carousel.style.transform = `translateX(${this.offset}px)`;
            }
        }
    }
}
