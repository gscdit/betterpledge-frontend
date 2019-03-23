import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(private http:HttpClient) { }
  boolean=true;
  deleteProduct(product_id) {
    return this.http.post('https://27ef592a.ngrok.io/deletelisting',"hi",{params:new HttpParams().set('listing_id',product_id)})
  }
  updateProduct(value,product_id) {
    return this.http.post<any>('https://27ef592a.ngrok.io/updatelisting',value,{params:new HttpParams().set('listing_id',product_id)})
  }
  getUserProduct(){
    return this.http.get<any>('https://27ef592a.ngrok.io/donorlistings');
  }
  getAll(){
    return this.http.get<any>('https://27ef592a.ngrok.io/listing',{params:new HttpParams().set('send_all',"0")});
  }
  getAllWithZero(){
    return this.http.get('https://27ef592a.ngrok.io/listing',{params:new HttpParams().set('send_all',"1")});
  }
  addProduct(value){
    return this.http.post<any>('https://27ef592a.ngrok.io/listing',value);
  }
  getSingleProduct(product_id){
    return this.http.get('https://27ef592a.ngrok.io/singlelisting',{params:new HttpParams().set('listing_id',product_id),responseType:'text'});
  }
}
