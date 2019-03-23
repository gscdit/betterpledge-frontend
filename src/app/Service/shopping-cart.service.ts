import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ShoppingCart } from './../Models/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) { }

  async delete(product) {
    let cart_id = await this.getorcreateCartId();
    this.db.object('/shopping-cart/' + cart_id + '/items/' + product.listing_id).remove()
  }

  async clearCart() {
    let cart_id = await this.getorcreateCartId();
    this.db.object('/shopping-cart/' + cart_id + '/items/').remove()
  }

  private create() {
    return this.db.list('/shopping-cart').push({
      DateCreated: new Date().getTime()
    })
  }

  totalCount(cart) {
    if (!cart) return 0;
    let count = 0;
    for (let listingid in cart.items) {
      count += cart.items[listingid].quantity;
    }
    return cart.items ? count : 0;
  }

  async removeFromCart(product) {
    let cart_id = await this.getorcreateCartId();
    let item$ = this.db.object('/shopping-cart/' + cart_id + '/items/' + product.listing_id);
    item$.snapshotChanges().take(1).subscribe(item => {
      let quantity = (item.payload.exists() ? item.payload.val()['quantity'] : 0) - 1
      if (quantity === 0) item$.remove();
      else item$.update({
        product: product,
        quantity: quantity
      });
    });
  }

  async getCart(): Promise<AngularFireObject<ShoppingCart>> {
    let cart_id = await this.getorcreateCartId();
    return this.db.object('/shopping-cart/' + cart_id);
  }

  private async getorcreateCartId(): Promise<string> {
    let cart_id = localStorage.getItem('cart_id')
    if (cart_id) return cart_id;
    let result = await this.create();
    localStorage.setItem('cart_id', result.key);
    return result.key;
  }

  async addToCart(product) {
    let cart_id = await this.getorcreateCartId();
    let item$ = this.db.object('/shopping-cart/' + cart_id + '/items/' + product.listing_id);
    item$.snapshotChanges().take(1).subscribe(item => {
      let quantity = (item.payload.exists() ? item.payload.val()['quantity'] : 0) + 1
      if (quantity === 0) item$.remove();
      else item$.update({
        product: product,
        quantity: quantity
      });
    });
  }

}
