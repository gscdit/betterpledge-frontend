import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(private http:HttpClient) { }

  deleteProduct(product_id) {
    return this.http.post('https://obv53599.pythonanywhere.com/deletelisting',"hi",{params:new HttpParams().set('listing_id',product_id)})
  }
  updateProduct(value,product_id) {
    return this.http.post<any>('https://obv53599.pythonanywhere.com/updatelisting',value,{params:new HttpParams().set('listing_id',product_id)})
  }
  getUserProduct(){
    return this.http.get<any>('https://obv53599.pythonanywhere.com/donorlistings');
  }
  getAll(){
    return this.http.get<any>('https://obv53599.pythonanywhere.com/listing');
  }
  addProduct(value){
    return this.http.post<any>('https://obv53599.pythonanywhere.com/listing',value);
  }
  getSingleProduct(product_id){
    return this.http.get('https://obv53599.pythonanywhere.com/singlelisting',{params:new HttpParams().set('listing_id',product_id),responseType:'text'});
  }
}
