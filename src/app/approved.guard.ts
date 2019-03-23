import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovedGuard implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedin() && this.authService.currentUser().type==='beneficiary' && this.authService.currentUser().status === 'approved') {
      return true;
    } else if(this.authService.loggedin() && this.authService.currentUser().type==='beneficiary' && this.authService.currentUser().status === 'pending'){
      this.router.navigate(['/product/verification'])
    }
     else  {
      this.authService.logout();
      this.router.navigate(['/user/food/login'], { queryParams: { returnUrl: state.url } })
      return false;
    }
  }
}
