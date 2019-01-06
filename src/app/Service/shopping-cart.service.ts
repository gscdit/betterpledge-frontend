import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { take } from 'rxjs-compat/operator/take';
import { Product } from '../Models/product';
import { ShoppingCart } from './../Models/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-cart').push({
      DateCreated: new Date().getTime()
    })
  }
   totalCount(cart){
    let count = 0;
    for (let listingid in cart.items) {
      count += cart.items[listingid].quantity;
    }
    return count
}

 async removeFromCart(product) {
    let cart_id= await this.getorcreateCartId();
    let item$=this.db.object('/shopping-cart/'+cart_id+'/items/'+product.listing_id);
    item$.snapshotChanges().take(1).subscribe(item=>{
      item$.update({
        product: product,
        quantity:
          (item.payload.exists() ? item.payload.val()['quantity'] : 0) - 1
      });
    });
  }

  async getCart():Promise<AngularFireObject<ShoppingCart>> {
    let cart_id= await this.getorcreateCartId();
    return this.db.object('/shopping-cart/' + cart_id)
  }

  private async getorcreateCartId(): Promise<string> {
    let cart_id = localStorage.getItem('cart_id')
    if (cart_id) return cart_id;
    let result = await this.create();
    localStorage.setItem('cart_id', result.key);
    return result.key;
  }

  async addToCart(product) {
    let cart_id= await this.getorcreateCartId();
    let item$=this.db.object('/shopping-cart/'+cart_id+'/items/'+product.listing_id);
    item$.snapshotChanges().take(1).subscribe(item=>{
      item$.update({
        product: product,
        quantity:
          (item.payload.exists() ? item.payload.val()['quantity'] : 0) + 1
      });
    });
  }



}
