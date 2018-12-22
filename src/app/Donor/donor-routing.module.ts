import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DonorProductComponent } from './donor-product/donor-product.component';


const recipesRoutes: Routes = [
  {path:'donor/addProduct',component:AddProductComponent},
  {path:'donor/editProduct/:id',component:AddProductComponent},
  {path:'donor/donatedProduct',component:DonorProductComponent}
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
