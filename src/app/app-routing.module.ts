import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkersComponent } from "./workers/workers.component";
import { RegisterComponent } from "./register/register.component";
const appRoutes: Routes = [
  { path:'',redirectTo:'/Home',pathMatch:'full'},
{ path:'Home',component:HomepageComponent},
{ path:'Login',component:LoginPageComponent},
{ path:'About',component:AboutComponent},
{ path:'Contact',component:ContactComponent},
{ path:'Services',component:WorkersComponent},
{ path:'Register',component:RegisterComponent}
];
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] 
  
})
export class AppRoutingModule {
}