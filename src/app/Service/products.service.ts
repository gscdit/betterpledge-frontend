import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:Http) { }

  getAll(){
    return this.http.get('https://obv53599.pythonanywhere.com/listing');
  }
}
