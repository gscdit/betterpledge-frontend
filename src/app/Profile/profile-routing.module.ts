import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MyOrderComponent } from './my-order/my-order.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile.component';
import { NotificationComponent } from './notification/notification.component';
import { DonorGuard } from '../donor.guard';
import { BeneficiaryGuard } from '../beneficiary.guard';


const recipesRoutes: Routes = [
    {path:'',component:ProfileComponent,children:[
  { path: 'order', component: MyOrderComponent, canActivate: [AuthGuard,BeneficiaryGuard] },
  {path:'notification',component:NotificationComponent,canActivate:[AuthGuard,DonorGuard]},
  { path: 'Profile', component: MyProfileComponent, canActivate: [AuthGuard] }]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class ProfileRoutingModule { }
