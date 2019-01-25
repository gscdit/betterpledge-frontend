import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FaqsComponent } from './faqs/faqs.component';
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { ExtraRoutingModule } from "./extra-routing.module";
import { RouterModule } from "@angular/router";
import { ExtraComponent } from './extra.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        FaqsComponent,
        ExtraComponent
    ],
    imports: [
        CommonModule,
        NgProgressModule,
        ExtraRoutingModule,
        CoreModule,
        RouterModule
    ]
})

export class ExtraModule { }