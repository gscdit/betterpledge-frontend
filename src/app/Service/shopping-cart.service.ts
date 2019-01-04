import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private http: HttpClient) { }

  removeFromCart(product){
   return this.http.get('',product)
  }

  getCart(){
    return this.http.get('');
  }

  addToCart(product){
    return this.http.post('',product);
  }

   
   
}
