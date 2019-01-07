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
    // console.log(cart.items)
     this.cart$=cart
     if(cart)
     this.product_ids= Object.keys(cart.items);
    //  console.log(this.product_ids[0])
    //  console.log(this.cart$.items[this.product_ids[0]].product)
    })
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

  removeFromCart(product) {
    // console.log(product)
    this.cartService.removeFromCart(product)
  }

  addToCart(product) {
    // this.show=!this.show
    this.cartService.addToCart(product)
  }
  clearCart(){
    this.cartService.clearCart();
  }
  delete(product){
  //  console.log( product.listing_id)
    this.cartService.delete(product);
  }
}
