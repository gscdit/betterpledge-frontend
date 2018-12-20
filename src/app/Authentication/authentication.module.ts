import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { ConfirmPassword } from "../shared/confirm-password.directive";
import { HttpService } from "../Service/http.service";
import { AuthenticateService } from "../Service/authentication.service";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { CommonModule } from "@angular/common";

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