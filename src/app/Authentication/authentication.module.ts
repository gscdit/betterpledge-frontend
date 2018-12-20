import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ConfirmPassword } from "../shared/confirm-password.directive";
import { HttpService } from "../Service/http.service";
import { AuthenticateService } from "../Service/authentication.service";
import { TokenInterceptorService } from "../Service/token-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationRoutingModule } from "./authentication-routing.module";

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
        ConfirmPassword,
       
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ],
    providers: [HttpService,AuthenticateService ]
})
export class AuthenticateModule{}