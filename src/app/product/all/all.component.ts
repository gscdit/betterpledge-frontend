import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductsService } from './../../Service/products.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ShoppingCartService } from './../../Service/shopping-cart.service';
import { Product } from './../../Models/product';
import { Subscription } from 'rxjs';
import { NgProgress } from 'ngx-progressbar';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { ShoppingCart } from './../../Models/shoppingCart';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy,AfterViewInit {
  product = [];
  filteredProduct = [];
  searchProduct = [];
  type: string;
  shoppingCart;
  subscription: Subscription
  productsubscription: Subscription;
  show = true;
  loader = true;
  product_ids;
  productSubscription: Subscription;
  prod: Object;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private progressService: NgProgress,
    private cartService: ShoppingCartService,
    public authService: AuthenticateService) {
  }

  ngAfterViewInit() {
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.progressService.start();
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {     
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
          this.progressService.done();
            }
        });
}

  async ngOnInit() {
    this.productsubscription = this.ps.getAll().switchMap(
      p => {
        console.log(p)
        if (p)
          this.product = p.listing;
        return this.route.queryParamMap
      })
      .subscribe(
        params => {
          //loader
          this.loader = false;

              
          this.type = params.get('type');
          this.searchProduct = this.filteredProduct = (this.type) ?
            this.product.filter(p => p.type === this.type) : this.product;
          if (this.shoppingCart && this.shoppingCart.items) {
            console.log(this.shoppingCart.items)
            this.product_ids = Object.keys(this.shoppingCart.items);
            for (let product in this.filteredProduct) {
              console.log(this.filteredProduct[product].quantity);
              if (this.getQuantity(this.filteredProduct[product]) > this.filteredProduct[product].quantity) {
                this.delete(this.filteredProduct[product]);
              }
            }
          }
        });

    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(
      cart => {
        this.shoppingCart = cart;
      });
  }

  delete(product) {
    this.cartService.delete(product);
  }

  totalQuantity() {
    if (this.filteredProduct)
      return this.filteredProduct.length
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product)
  }

  detailPage(product) {
    this.router.navigate(['/product/detail', product.listing_id]);
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }

  filter(query: string) {
    let q = query.toLowerCase();
    this.filteredProduct = this.searchProduct;
    this.filteredProduct = (query) ?
      this.filteredProduct.filter(p => p.description.toLowerCase().includes(q)) : this.searchProduct;
  }

  checkout(product) {
    this.addToCart(product);
    this.router.navigate(['/check-out'])
  }

  getQuantity(prod: Product) {
    if (!this.shoppingCart) return null;
    if (this.shoppingCart && this.shoppingCart.items) {
      let item = this.shoppingCart.items[prod.listing_id]
      return item ? item.quantity : null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.productsubscription.unsubscribe();
  }
}