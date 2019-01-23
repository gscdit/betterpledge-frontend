
import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExtraRoutingModule } from "./extra-routing.module";
import { FaqsComponent } from './faqs/faqs.component';
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";

@NgModule({
    declarations:[
     AboutComponent,
     ContactComponent,
     FaqsComponent
    ],
    imports:[
    CommonModule,
    ExtraRoutingModule,
    NgProgressModule,
    CoreModule
    ]
})
export class ExtraModule{}