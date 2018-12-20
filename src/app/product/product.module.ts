import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AllComponent } from "./all/all.component";
import { TrendingComponent } from "./trending/trending.component";
import { LightningFastDealComponent } from "./lightning-fast-deal/lightning-fast-deal.component";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
    declarations:[
        ProductDetailComponent,
        AllComponent,
        TrendingComponent,
        LightningFastDealComponent
    ],
    imports:[
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductModule{}