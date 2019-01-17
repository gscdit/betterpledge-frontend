import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../Models/shoppingCart';
import { p } from '@angular/core/src/render3';
import { OrderService } from './../Service/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  ordersubsc: Subscription;
  constructor(private modalService: NgbModal,private cartService:ShoppingCartService,private os:OrderService) { }

 async ngOnInit() {
    this.subscription=  (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
       this.cart$=cart
       if(cart&& cart.items)
       this.product_ids=Object.keys(cart.items)
       this.count=this.cartService.totalCount(cart)
       for(let product_id in this.product_ids){
        if(this.cart$ && this.cart$.items[this.product_ids[product_id]].product.quantity<this.cart$.items[this.product_ids[product_id]].quantity)
        this.delete(this.cart$.items[this.product_ids[product_id]].product)
      }
      })
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    let data = [];
   for(let product in this.product_ids)
    data.push(this.cart$.items[this.product_ids[product]])
    let order={
      time_stamp:new Date().getTime(),
     orders:data
    }
    console.log(order)
    this.ordersubsc =  this.os.storeOrder(order).take(1).subscribe(res=>{
      console.log(res);
      this.cartService.clearCart();
    }); 
    } 

    delete(product) {
      this.cartService.delete(product);
    }
 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
