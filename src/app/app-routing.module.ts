import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./Authentication/login/login.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { RegisterComponent } from "./Authentication/register/register.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { AuthGuard } from "./auth.guard";
const appRoutes: Routes = [

{ path:'Login',component:LoginComponent},
{ path:'About',component:AboutComponent},
{ path:'Contact',component:ContactComponent},
{ path:'Register',component:RegisterComponent},
{path:'Profile',component:MyProfileComponent,canActivate:[AuthGuard]},
{path:'Order',component:MyOrderComponent,canActivate:[AuthGuard]}
];
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] 
  
})
export class AppRoutingModule {
}