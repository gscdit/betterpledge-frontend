import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgoVerificationService {

  constructor(private http:HttpClient) { }

  sendDetails(value){
  return  this.http.post("https://gscditu.com/api/addverificationdetails",value)
  }
  
}
