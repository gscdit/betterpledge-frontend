import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NotFoundComponent } from './404/404.component';


const recipesRoutes: Routes = [
    { path:'About',component:AboutComponent },
    { path:'about',component:AboutComponent },
    { path:'Contact',component:ContactComponent },
    { path:'contact',component:ContactComponent },
    { path:'faqs',component:FaqsComponent },
    { path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class ExtraRoutingModule {}
