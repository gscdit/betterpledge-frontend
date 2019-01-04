import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';


const recipesRoutes: Routes = [
  {path:'',component:HomepageComponent}  
];


@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class HomePageRoutingModule {}
