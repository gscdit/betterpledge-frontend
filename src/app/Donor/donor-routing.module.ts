import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DonorProductComponent } from './donor-product/donor-product.component';
import { AuthGuard } from '../auth.guard';
import { DonorGuard } from '../donor.guard';
import { ProductComponent } from '../product/product.component';
import { DonorComponent } from './donor.component';


const recipesRoutes: Routes = [
  {path:'',component:DonorComponent,children:[
  {path:'addProduct',component:AddProductComponent,canActivate:[AuthGuard,DonorGuard]},
  {path:'editProduct/:id',component:AddProductComponent,canActivate:[AuthGuard,DonorGuard]},
  {path:'donatedProduct',component:DonorProductComponent,canActivate:[AuthGuard,DonorGuard]}
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
export class DonorRoutingModule {}
