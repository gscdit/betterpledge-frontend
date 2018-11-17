import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private authService: AuthService) { }

  intercept(req, next) {
    // let authService=this.injector.get(AuthService)
    let tokenizedReg = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }

    })
    return next.handle(tokenizedReg)
  }
}

