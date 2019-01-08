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
  searchProduct=[];
  type: string;
  shoppingCart;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private cartService: ShoppingCartService) {
      console.log(this.product.length)
      console.log(this.searchProduct.length)
  }
  subscription:Subscription
  totalQuantity(){
    return this.filteredProduct.length;
  }

  show=true;

  async ngOnInit() {

    this.ps.getAll().take(1).switchMap(
      p => {
        if(p)
        this.product = p.listing;
        console.log(this.product.length)
        return this.route.queryParamMap
      })
      .subscribe(
        params => {
       
          this.type = params.get('type');
          this.searchProduct= this.filteredProduct = (this.type) ?
            this.product.filter(p => p.type === this.type) : this.product;

     
        });


   this.subscription= (await this.cartService.getCart()).snapshotChanges().subscribe(
      cart => {
       
        this.shoppingCart = cart.payload.val();
    
      }
    );
  
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
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  filter(query:string){
  let q= query.toLowerCase()
   

    this.filteredProduct=(query) ?
    this.filteredProduct.filter(p=>p.description.toLowerCase().includes(q)) : this.searchProduct;
    // if(query===''){
    //   this.filteredProduct=this.searchProduct
    // }
    // else{
    //   this.filteredProduct=
    // this.filteredProduct.filter(p=>p.description.toLowerCase().includes(q));
    // }
  }
  checkout(product){
    this.addToCart(product);
    this.router.navigate(['/check-out'])
  }
  getQuantity(prod:Product){
   if(!this.shoppingCart) return 0;
   if(this.shoppingCart.items){
   let item=this.shoppingCart.items[prod.listing_id]
   return item? item.quantity:0;
  }}
}
