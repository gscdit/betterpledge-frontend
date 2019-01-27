import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { MyOrderComponent } from "./my-order/my-order.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { FormsModule } from "@angular/forms";
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations:[
        MyOrderComponent,
        MyProfileComponent,
        ProfileComponent,
        NotificationComponent
    ],
    imports:[
    CommonModule,
    NgProgressModule,
    CoreModule,
    FormsModule,
    ProfileRoutingModule
    ]
})
export class ProfileModule{

}