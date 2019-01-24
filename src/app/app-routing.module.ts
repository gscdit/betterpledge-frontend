import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'product',loadChildren:'./product/product.module#ProductModule'},
  {path:'Cart',loadChildren:'./shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path:'my',loadChildren:'./Profile/profile.module#ProfileModule'},
  {path:'donor',loadChildren:'./Donor/donor.module#DonorModule'},
  {path:'check-out',loadChildren:'./check-out/check-out.module#CheckOutModule'},
  {path:'user',loadChildren:'./Authentication/authentication.module#AuthenticateModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}