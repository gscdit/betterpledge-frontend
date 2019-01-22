import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product/add-product.component";
import { DonorRoutingModule } from "./donor-routing.module";
import { FormsModule } from "@angular/forms";
import { DonorProductComponent } from '../Donor/donor-product/donor-product.component';
import { NgProgressModule } from "ngx-progressbar";

@NgModule({
    declarations:[
       AddProductComponent,
       DonorProductComponent
    ],
    imports:[
        CommonModule,
        DonorRoutingModule,
        FormsModule,
        NgProgressModule
    ]
})
export class DonorModule{}