import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProblemsComponent } from './problems/problems.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkersComponent } from './workers/workers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HttpService } from './Service/http.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateService } from './Service/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { ConfirmPassword } from './shared/confirm-password.directive';
import {ProgressBarModule} from "angular-progress-bar";
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ProblemsComponent,
    HighlightsComponent,
    LoginComponent,
    HomepageComponent,
    LoginPageComponent,
    AboutComponent,
    ContactComponent,
    WorkersComponent,
    RegisterComponent,
    ConfirmPassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    ProgressBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
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
