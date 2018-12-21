import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>('https://obv53599.pythonanywhere.com/listing');
  }
  addProduct(value){
    return this.http.post<any>('https://obv53599.pythonanywhere.com/listing',value)
  }
}
