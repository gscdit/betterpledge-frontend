import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../Models/shoppingCart';
import { p } from '@angular/core/src/render3';
import { OrderService } from './../Service/order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  shipping={name:null,phone:null,City:null,address:null}
  subscription: Subscription;
  cart$;
  count;
  product_ids;
  constructor(private cartService:ShoppingCartService,private os:OrderService) { }

 async ngOnInit() {
    this.subscription=  (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
       this.cart$=cart
       if(cart&& cart.items)
       this.product_ids=Object.keys(cart.items)
      //  console.log(this.product_ids!==undefined)
       this.count=this.cartService.totalCount(cart)
      //  console.log(this.cart$!==null);
      })
  }
  placeOrder(){
   
    let order={
      userId:localStorage.getItem('token'),
      datePlaced:new Date().getTime(),
      shipping:this.shipping,
      items:this.cart$
    } 
    console.log(order);
    this.os.storeOrder(order);   
  }
 
 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
