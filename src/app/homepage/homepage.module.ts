
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./homepage.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ProblemsComponent } from './problems/problems.component';
import { NgModule } from "@angular/core";
import { HighlightsComponent } from "./highlights/highlights.component";
import { HomePageRoutingModule } from "./homepage-routing.module";
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
    declarations:[
     HomepageComponent,
     CarouselComponent,
     ProblemsComponent,
     HighlightsComponent
    ],
    imports:[
    CommonModule,
    HomePageRoutingModule,
    NgProgressModule,
    CoreModule,
    MDBBootstrapModule.forRoot()
    ]
})
export class HomePageModule{}