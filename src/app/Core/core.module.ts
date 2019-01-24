import { NgModule } from '@angular/core';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserXhr } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ]
})
export class CoreModule {}
