import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { MyProfileComponent } from "./Profile/my-profile/my-profile.component";

import { AuthGuard } from "./auth.guard";
const appRoutes: Routes = [
{ path:'',redirectTo:'/Home',pathMatch:'full'},
{ path:'Home',component:HomepageComponent},
{ path:'About',component:AboutComponent},
{ path:'Contact',component:ContactComponent},
{path:'Profile',component:MyProfileComponent,canActivate:[AuthGuard]},

];
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] 
  
})
export class AppRoutingModule {
}