import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../Models/shoppingCart';
import { p } from '@angular/core/src/render3';
import { OrderService } from './../Service/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shipping={name:null,phone:null,City:null,address:null}
  subscription: Subscription;
  cart$;
  count;
  product_ids;
  ordersubsc: Subscription;
  productSubscription: Subscription;
  constructor(private modalService: NgbModal,private cartService:ShoppingCartService,private os:OrderService,private ps:ProductsService) { }

 async ngOnInit() {
  this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(cart => {
    this.count = this.cartService.totalCount(cart);
    this.cart$ = cart
    if (cart && cart.items){
      this.product_ids = Object.keys(cart.items);
      this.productSubscription= this.ps.getAllWithZero().subscribe(res=>{

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

    getQuantity(prod){
      if(!this.cart$) return null ;
   if(this.cart$ && this.cart$.items){
   let item=this.cart$.items[prod.listing_id]
   return item? item.quantity:null;
    }
    }
    
    ngOnDestroy(){
      this.subscription.unsubscribe();
      this.productSubscription.unsubscribe();
    }

}