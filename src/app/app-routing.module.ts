import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { LoginPageComponent } from "./login-page/login-page.component";
const appRoutes: Routes = [
  { path:'',redirectTo:'/Home',pathMatch:'full'},
{ path:'Home',component:HomepageComponent},
{ path:'Login',component:LoginPageComponent}
];
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] 
  
})
export class AppRoutingModule {
}