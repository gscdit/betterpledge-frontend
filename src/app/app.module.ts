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
import { CoreModule } from './Core/core.module';
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
import { NotFoundComponent } from './Extra/404/404.component';
import { NgProgress, NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    NgProgressModule,
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
