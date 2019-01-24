import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DonorGuard implements CanActivate {

  constructor(private authService:AuthenticateService,private router:Router){}
  
  canActivate(route,state:RouterStateSnapshot):boolean{
    if(this.authService.currentUser().type==='donor'){
      return true;
    }else{
        this.authService.logout();
      this.router.navigate(['/user/login-donor'],{queryParams:{returnUrl:state.url}})
      return false
    }
  }
}
