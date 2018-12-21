import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product/add-product.component";
import { DonorRoutingModule } from "./donor-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
       AddProductComponent
    ],
    imports:[
        CommonModule,
        DonorRoutingModule,
        FormsModule
    ]
})
export class DonorModule{}