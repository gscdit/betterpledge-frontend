import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from "./Extra/404/404.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',loadChildren:'./homepage/homepage.module#HomePageModule'},
  {path:'product',loadChildren:'./product/product.module#ProductModule'},
  {path:'Cart',loadChildren:'./shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path:'my',loadChildren:'./Profile/profile.module#ProfileModule'},
  {path:'donor',loadChildren:'./Donor/donor.module#DonorModule'},
  {path:'check-out',loadChildren:'./check-out/check-out.module#CheckOutModule'},
  {path:'user',loadChildren:'./Authentication/authentication.module#AuthenticateModule'},
  {path:'view',loadChildren:'./Extra/extra.module#ExtraModule'},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}