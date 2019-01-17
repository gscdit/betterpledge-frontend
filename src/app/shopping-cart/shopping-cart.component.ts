import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './../Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart$;
  count;
  product=[];
  product_ids;
  subscription: Subscription;
  productSubscription: Subscription;
  constructor(private cartService: ShoppingCartService,private ps:ProductsService) { }

  async ngOnInit() {
   

    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(cart => {
      this.count = this.cartService.totalCount(cart);
      this.cart$ = cart
      if (cart && cart.items)
        this.product_ids = Object.keys(cart.items);
        //finally
        for(let product_id in this.product_ids){
          if(this.cart$.items[this.product_ids[product_id]].product.quantity<this.cart$.items[this.product_ids[product_id]].quantity)
          this.delete(this.cart$.items[this.product_ids[product_id]].product)
        }
      })
   

    //  this.productSubscription= this.ps.getAll().subscribe(res=>{if(res){
    //     this.product=res.listing
    //     // for(let product in this.product_ids){
    //     // if((this.product[(this.product_ids[product])-1].quantity) > (this.cart$.items[this.product_ids[product]])){
    //     //    console.log('not update')
    //     // }}
    //   }}       
    //   )
  }
  
  removeFromCart(product) {
    this.cartService.removeFromCart(product)
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }

  clearCart() {
    this.cartService.clearCart();
  }

  delete(product) {
    this.cartService.delete(product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
