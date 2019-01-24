import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { LoginDonorComponent } from './login-donor/login-donor.component';
import { AuthenticationComponent } from './authentication.component';

const recipesRoutes: Routes = [
  {path:'',component:AuthenticationComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'login-donor',component:LoginDonorComponent},
  {path:'register-beneficiary',component:RegisterComponent},
  {path:'register-donor',component:RegisterDonorComponent}
  ]}
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
