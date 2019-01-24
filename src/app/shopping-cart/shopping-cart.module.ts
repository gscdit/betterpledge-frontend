import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartRoutingModule } from "./shopping-cart-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        ShoppingCartComponent
    ],
    imports:[
    CommonModule,
    NgProgressModule,
    ShoppingCartRoutingModule,
    CoreModule,
    RouterModule
    ]
})
export class ShoppingCartModule{

}