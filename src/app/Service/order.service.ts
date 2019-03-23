import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private http:HttpClient) { }

  storeOrder(order){
  return this.http.post('https://76c328b6.ngrok.io/order',order);
  }
  showbeneficiaryOrder(){
    return this.http.get('https://76c328b6.ngrok.io/beneficiary/orders');
  }
  notification(){
    return this.http.get('https://76c328b6.ngrok.io/donor/orders');
  }
  //donor/orders
  
}


