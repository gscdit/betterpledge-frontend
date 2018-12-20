import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const recipesRoutes: Routes = [
    { path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],

})
export class AuthenticationRoutingModule {}
