import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ShoppingCartComponent } from './shopping-cart.component';


const recipesRoutes: Routes = [
    { path: '', component: ShoppingCartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class ShoppingCartRoutingModule { }
