import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
private _registerUrl="https://obv53599.pythonanywhere.com/beneficiary"
private _register2Url="https://obv53599.pythonanywhere.com/donor"
private _loginUrl="https://obv53599.pythonanywhere.com/login"
  constructor(private http:HttpClient,private router:Router) { }

  register(user){
   return this.http.post<any>(this._registerUrl,user)
  }
  registerdonor(user){
    return this.http.post<any>(this._register2Url,user)
   }
  login(user){
   return this.http.post<any>(this._loginUrl,user) 
  }
  loggedin(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
     localStorage.removeItem('token')
    this.router.navigate(['/Home'])
  }
   currentUser(){
    let token=localStorage.getItem('token')
    let jwthelper=new JwtHelperService();
    // console.log(jwthelper.decodeToken(token))
    return jwthelper.decodeToken(token)
  }
  
}
