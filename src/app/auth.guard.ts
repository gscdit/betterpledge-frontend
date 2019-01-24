import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthenticateService,private router:Router){}
  
  canActivate(route,state:RouterStateSnapshot):boolean{
    if(this.authService.loggedin()){
      return true;
    }else{
      this.router.navigate(['/user/login'],{queryParams:{returnUrl:state.url}})
      return false
    }
  }
}
