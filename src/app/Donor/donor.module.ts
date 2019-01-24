import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product/add-product.component";
import { DonorRoutingModule } from "./donor-routing.module";
import { FormsModule } from "@angular/forms";
import { DonorProductComponent } from '../Donor/donor-product/donor-product.component';
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { DonorComponent } from './donor.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
       AddProductComponent,
       DonorProductComponent,
       DonorComponent
    ],
    imports:[
        CommonModule,
        DonorRoutingModule,
        FormsModule,
        NgProgressModule,
        CoreModule,
        RouterModule
    ]
})
export class DonorModule{}