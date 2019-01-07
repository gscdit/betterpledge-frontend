import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnDestroy {
  id
  product={image:null}
  shoppingCart;
  subscription: Subscription
  constructor(private ps:ProductsService,private route:ActivatedRoute,private cartService:ShoppingCartService) { }

 async ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.ps.getSingleProduct(this.id).subscribe(res=>{
      this.product=JSON.parse(res);
      console.log(this.product)
    });
    this.subscription= (await this.cartService.getCart()).snapshotChanges().subscribe(
      cart => {
        // console.log(cart.payload.val()['items']);
        this.shoppingCart = cart.payload.val();
        // console.log(this.shoppingCart[2].quantity)
      }
    );
  }
  addToCart(){
    this.cartService.addToCart(this.product);
  }
  getQuantity(){
    // console.log(this.shoppingCart.items[prod.listing_id])
    // return 0;
   if(!this.shoppingCart) return 0;
   let item=this.shoppingCart.items[this.product['listing_id']]
   return item? item.quantity:0;
  }
  removeFromCart() {
    // console.log(product)
    this.cartService.removeFromCart(this.product)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
