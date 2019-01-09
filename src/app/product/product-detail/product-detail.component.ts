import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnDestroy {
  id
  product={image:null,description:null,quantity:null,type:null}
  shoppingCart;
  subscription: Subscription
  constructor(private ps:ProductsService,private route:ActivatedRoute,private cartService:ShoppingCartService,private router:Router) { }

 async ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.ps.getSingleProduct(this.id).subscribe(res=>{
      this.product=JSON.parse(res);
      console.log(this.product)
    });
    this.subscription= (await this.cartService.getCart()).snapshotChanges().subscribe(
      cart => {
        this.shoppingCart = cart.payload.val();
      }
    );
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  checkout(){
    this.addToCart();
    this.router.navigate(['/check-out'])
  }

  getQuantity(){
   if(!this.shoppingCart) return null;
   if(this.shoppingCart && this.shoppingCart.items){
   let item=this.shoppingCart.items[this.product['listing_id']]
   return item? item.quantity:null;
  }}

  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
