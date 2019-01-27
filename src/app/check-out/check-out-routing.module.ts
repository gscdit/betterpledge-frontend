import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CheckOutComponent } from './check-out.component';


const recipesRoutes: Routes = [
  { path: '', component: CheckOutComponent, canActivate: [AuthGuard],data:{title:'Check-Out'} }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class CheckOutRoutingModule { }
