import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticateService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private authService: AuthenticateService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler) : Observable<HttpEvent<any>>{
    // let authService=this.injector.get(AuthService)
    let idToken=this.authService.getToken();
    if(idToken){
    let tokenizedReg = req.clone({
      headers:req.headers.set("x-access-token",idToken)   
    });
    return next.handle(tokenizedReg);
  }
    else{
    return next.handle(req);
  }
  }
}

