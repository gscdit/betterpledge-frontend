import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './Service/http.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateService } from './Service/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { MyProfileComponent } from './Profile/my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateModule } from './Authentication/authentication.module';
import { ProductModule } from './product/product.module';
import { HomePageModule } from './homepage/homepage.module';
import { CoreModule } from './Core/core.module';
import { ExtraModule } from './Extra/extra.module';
import { DonorModule } from './Donor/donor.module';
import { ShoppingCartService } from './Service/shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpModule } from '@angular/http';
import {  AngularFireModule } from 'angularfire2';

import {  AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticateModule,
    ProductModule,
    HomePageModule,
    CoreModule,
    ExtraModule,
    DonorModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
 
  providers: [HttpService,AuthenticateService,AuthGuard,ShoppingCartService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
