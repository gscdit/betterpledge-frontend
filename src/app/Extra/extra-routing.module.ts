import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ExtraComponent } from './extra.component';

const recipesRoutes: Routes = [
  {path:'',component:ExtraComponent,children:[
    { path:'About',component:AboutComponent},
{ path:'Contact',component:ContactComponent},
{path:'faqs',component:FaqsComponent}
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
export class ExtraRoutingModule {}
