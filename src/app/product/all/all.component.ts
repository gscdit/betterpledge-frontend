import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './../../Service/products.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from './../../Service/shopping-cart.service';
import { Product } from './../../Models/product';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit,OnDestroy {
  product = [];
  filteredProduct = [];
  type: string;
  shoppingCart;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private cartService: ShoppingCartService) {
  }
  subscription:Subscription

  show=true;

  async ngOnInit() {
    
    this.ps.getAll().take(1).switchMap(
      p => {
        this.product = p.listing;
        return this.route.queryParamMap
      })
      .subscribe(
        params => {
          this.type = params.get('type');
          this.filteredProduct = (this.type) ?
            this.product.filter(p => p.type === this.type) : this.product;

          //  console.log( this.filteredProduct);
        });


   this.subscription= (await this.cartService.getCart()).snapshotChanges().subscribe(
      cart => {
        // console.log(cart.payload.val()['items']);
        this.shoppingCart = cart.payload.val();
        // console.log(this.shoppingCart[2].quantity)
      }
    );
  }

  removeFromCart(product) {
    // console.log(product)
    this.cartService.removeFromCart(product)
  }

  detailPage(product) {
    // this.router.navigate(['/product/detail', product.listing_id]);
  }

  addToCart(product) {
    // this.show=!this.show
    this.cartService.addToCart(product)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  getQuantity(prod:Product){
    // console.log(this.shoppingCart.items[prod.listing_id])
    // return 0;
   if(!this.shoppingCart) return 0;
   let item=this.shoppingCart.items[prod.listing_id]
   return item? item.quantity:0;
  }
}
