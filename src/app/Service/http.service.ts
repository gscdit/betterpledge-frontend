import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
   
  
    changeProfile(value){
   return this.http.post('https://27ef592a.ngrok.io/user/update',value)
    }
    getProfile(){
     return this.http.get('https://27ef592a.ngrok.io/user')
    }
}