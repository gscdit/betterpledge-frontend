
import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExtraRoutingModule } from "./extra-routing.module";

@NgModule({
    declarations:[
     AboutComponent,
     ContactComponent
    ],
    imports:[
    CommonModule,
    ExtraRoutingModule
    ]
})
export class ExtraModule{}