import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy, AfterContentInit {
  id
  product = { image: null, description: null, quantity: null, type: null }
  shoppingCart;
  subscription: Subscription
  constructor(private ps: ProductsService, private route: ActivatedRoute, private cartService: ShoppingCartService, private router: Router, private progressService: NgProgress) { }

  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.progressService.start();
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
        }
        else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this.progressService.done();
        }
      });
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.ps.getSingleProduct(this.id).subscribe(res => {
      this.product = JSON.parse(res);
      console.log(this.product)
    });
    this.subscription = (await this.cartService.getCart()).snapshotChanges().subscribe(
      cart => {
        this.shoppingCart = cart.payload.val();
        if (this.getQuantity() > this.product.quantity) {
          this.delete();
        }
      }
    );
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }



  checkout() {
    this.addToCart();
    this.router.navigate(['/check-out'])
  }

  getQuantity() {
    if (!this.shoppingCart) return null;
    if (this.shoppingCart && this.shoppingCart.items) {
      let item = this.shoppingCart.items[this.product['listing_id']]
      return item ? item.quantity : null;
    }
  }
  delete() {
    this.cartService.delete(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
