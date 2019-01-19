import { NgModule } from '@angular/core';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserXhr } from '@angular/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ]
})
export class CoreModule {}
