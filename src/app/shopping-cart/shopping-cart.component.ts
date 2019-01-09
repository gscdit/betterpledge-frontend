import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './../Service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnDestroy {
  cart$;
  count;
  product_ids;
  subscription:Subscription;
  constructor(private cartService:ShoppingCartService) { }

  async ngOnInit() {
  this.subscription=  (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
    this.count=this.cartService.totalCount(cart);
     this.cart$=cart
     if(cart && cart.items)
     this.product_ids= Object.keys(cart.items);
    })
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product)
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }
  clearCart(){
    this.cartService.clearCart();
  }
  delete(product){
    this.cartService.delete(product);
  }
}
