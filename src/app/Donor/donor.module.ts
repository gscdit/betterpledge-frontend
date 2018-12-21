import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product/add-product.component";
import { DonorRoutingModule } from "./donor-routing.module";
import { FormsModule } from "@angular/forms";
import { DonorProductComponent } from '../Donor/donor-product/donor-product.component';

@NgModule({
    declarations:[
       AddProductComponent,
       DonorProductComponent
    ],
    imports:[
        CommonModule,
        DonorRoutingModule,
        FormsModule
    ]
})
export class DonorModule{}