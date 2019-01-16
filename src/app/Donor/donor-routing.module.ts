import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DonorProductComponent } from './donor-product/donor-product.component';
import { AuthGuard } from '../auth.guard';
import { DonorGuard } from '../donor.guard';


const recipesRoutes: Routes = [
  {path:'donor/addProduct',component:AddProductComponent,canActivate:[AuthGuard,DonorGuard]},
  {path:'donor/editProduct/:id',component:AddProductComponent,canActivate:[AuthGuard,DonorGuard]},
  {path:'donor/donatedProduct',component:DonorProductComponent,canActivate:[AuthGuard,DonorGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class DonorRoutingModule {}
