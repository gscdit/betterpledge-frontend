import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}
  
  canActivate():boolean{
    if(this.authService.loggedin()){
      return true;
    }else{
      this.router.navigate(['/Login'])
      return false
    }
  }
}
