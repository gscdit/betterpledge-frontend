import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private authService:AuthenticateService) { }
  getUserProduct(){
    return this.http.get<any>('https://obv53599.pythonanywhere.com/donorlistings',{headers: new HttpHeaders().set("x-access-token",this.authService.getToken())});
  }
  getAll(){
    return this.http.get<any>('https://obv53599.pythonanywhere.com/listing',{headers: new HttpHeaders().set("x-access-token",this.authService.getToken())});
  }
  addProduct(value){
    return this.http.post<any>('https://obv53599.pythonanywhere.com/listing',value,{headers: new HttpHeaders().set("x-access-token",this.authService.getToken())});
  }
 
}
