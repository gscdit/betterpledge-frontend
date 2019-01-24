
import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FaqsComponent } from './faqs/faqs.component';
import { NotFoundComponent } from './404/404.component';
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { ExtraRoutingModule } from "./extra-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
     AboutComponent,
     ContactComponent,
     FaqsComponent,
     NotFoundComponent
    ],
    imports:[
    CommonModule,
    NgProgressModule,
    ExtraRoutingModule,
    CoreModule,
    RouterModule
    ]
})
export class ExtraModule{}