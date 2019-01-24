import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LightningFastDealComponent } from './lightning-fast-deal/lightning-fast-deal.component';
import { TrendingComponent } from './trending/trending.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { AuthGuard } from '../auth.guard';
import { BeneficiaryGuard } from '../beneficiary.guard';


const recipesRoutes: Routes = [
  { path: 'product/all', component: AllComponent, canActivate: [AuthGuard, BeneficiaryGuard] },
  { path: 'product/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard, BeneficiaryGuard] },
  { path: 'product/lightning', component: LightningFastDealComponent, canActivate: [AuthGuard, BeneficiaryGuard] },
  { path: 'product/trending', component: TrendingComponent, canActivate: [AuthGuard, BeneficiaryGuard] }
  // { path: 'product/header', component: ProductHeaderComponent, canActivate: [AuthGuard, BeneficiaryGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class ProductRoutingModule { }
