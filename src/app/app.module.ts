import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './Service/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateService } from './Service/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { HomePageModule } from './homepage/homepage.module';
import { CoreModule } from './Core/core.module';
import { ExtraModule } from './Extra/extra.module';
import { ShoppingCartService } from './Service/shopping-cart.service';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { OrderService } from './Service/order.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DonorGuard } from './donor.guard';
import { BeneficiaryGuard } from './beneficiary.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomePageModule,
    CoreModule,
    ExtraModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],

  providers: [HttpService, OrderService, AuthenticateService, AuthGuard, DonorGuard, BeneficiaryGuard, ShoppingCartService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
