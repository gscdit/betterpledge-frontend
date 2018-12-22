import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDonorComponent } from './register-donor/register-donor.component';


const recipesRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register-beneficiary',component:RegisterComponent},
  {path:'register-donor',component:RegisterDonorComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AuthenticationRoutingModule {}
