import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './Service/http.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateService } from './Service/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { AngularFireModule } from '@angular/fire';
import { MyProfileComponent } from './Profile/my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateModule } from './Authentication/authentication.module';
import { ProductModule } from './product/product.module';
import { HomePageModule } from './homepage/homepage.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent,
    AboutComponent,
    ContactComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    AngularFireModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticateModule,
    ProductModule,
    HomePageModule
  ],
        exports:[
         HeaderComponent
        ],
  providers: [HttpService,AuthenticateService,AuthGuard,TokenInterceptorService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
