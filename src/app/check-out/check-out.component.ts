import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { OrderService } from './../Service/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../Service/products.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, AfterContentInit {
  shipping = { name: null, phone: null, City: null, address: null }
  subscription: Subscription;
  cart$;
  count;
  product_ids;
  ordersubsc: Subscription;
  message;
  productSubscription: Subscription;
  constructor(private modalService: NgbModal, private cartService: ShoppingCartService, 
    private os: OrderService, private ps: ProductsService, 
    private router: Router, private progressService: NgProgress,private titleService: Title) { }

  async ngOnInit() {
    this.titleService.setTitle('Check Out');
    window.scroll(0,0);
    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(cart => {
      this.count = this.cartService.totalCount(cart);
      this.cart$ = cart
      if (cart && cart.items) {
        this.product_ids = Object.keys(cart.items);
        this.productSubscription = this.ps.getAllWithZero().subscribe(res => {
          for (let product in res) {
            console.log(res[product].quantity);
            if (this.getQuantity(res[product]) > res[product].quantity) {
              this.delete(res[product]);
            }
          }
        })
      }
    })
  }

  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.progressService.start();
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.progressService.done();
        }
      });
  }
  
   close(){
    this.modalService.dismissAll('Close click');
    this.router.navigate(['my/order']);
   }

  openVerticallyCentered(content) {
   
    this.modalService.open(content, { centered: true });
    let data = [];
    for (let product in this.product_ids)
      data.push(this.cart$.items[this.product_ids[product]])
    let order = {
      time_stamp: new Date().getTime(),
      orders: data
    }
    console.log(order)
    this.os.storeOrder(order).subscribe(res => {
      console.log(res);
      this.message = res['message'];
      this.modalService.open(content, { centered: true });
      this.cartService.clearCart();
    });
  }

  delete(product) {
    this.cartService.delete(product);
  }

  getQuantity(prod) {
    if (!this.cart$) return null;
    if (this.cart$ && this.cart$.items) {
      let item = this.cart$.items[prod.listing_id]
      return item ? item.quantity : null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.cart$ && this.cart$.items)
      this.productSubscription.unsubscribe();
       
  }

  

}