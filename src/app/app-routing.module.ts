import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from "./Profile/my-profile/my-profile.component";
import { AuthGuard } from "./auth.guard";

const appRoutes: Routes = [
{ path:'',redirectTo:'/Home',pathMatch:'full'},
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