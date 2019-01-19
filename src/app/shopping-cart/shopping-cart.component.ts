import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './../Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ProductsService } from '../Service/products.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart$;
  count;
  product;
  product_ids;
  subscription: Subscription;
  productSubscription: Subscription;
  constructor(private cartService: ShoppingCartService,private ps:ProductsService) { }

  async ngOnInit() {
   
    
    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(cart => {
      this.count = this.cartService.totalCount(cart);
      this.cart$ = cart
      if (cart && cart.items){
        this.product_ids = Object.keys(cart.items);
        this.productSubscription= this.ps.getAllWithZero().subscribe(res=>{
          this.product=res;
            for(let product in res ){
              console.log(res[product].quantity);
              if(this.getQuantity(res[product])>res[product].quantity){
                  this.delete(res[product]);
              }}  
            }
          )}
        }
      ) 
  }
  
  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }
  

  addToCart(product) {
    this.cartService.addToCart(product)
  }
  
  getQuantity(product){
    if(!this.cart$) return null ;
    if(this.cart$ && this.cart$.items){
    let item=this.cart$.items[product.listing_id]
    return item? item.quantity:null;
   }}

  clearCart() {
    this.cartService.clearCart();
  }

  delete(product) {
    this.cartService.delete(product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if(this.cart$ && this.cart$.items)
    this.productSubscription.unsubscribe();
  }

}
