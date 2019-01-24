import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MyOrderComponent } from './my-order/my-order.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile.component';


const recipesRoutes: Routes = [
    {path:'',component:ProfileComponent,children:[
  { path: 'order', component: MyOrderComponent, canActivate: [AuthGuard] },
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
