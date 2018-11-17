import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

private _registerUrl="http://7fe6adf7.ngrok.io/beneficiary"
private _loginUrl="http://7fe6adf7.ngrok.io/login"
  constructor(private http:HttpClient,private router:Router) { }

  register(user){
   return this.http.post<any>(this._registerUrl,user)
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
}
