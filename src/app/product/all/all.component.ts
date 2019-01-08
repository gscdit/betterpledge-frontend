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
  subscription:Subscription
  productsubscription: Subscription;
  show=true;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private cartService: ShoppingCartService) {
  }

  totalQuantity(){
    return this.filteredProduct.length;
  }

  async ngOnInit() {
   this.productsubscription =this.ps.getAll().switchMap(
      p => {
        if(p)
        this.product = p.listing;
        return this.route.queryParamMap
      })
      .subscribe(
        params => {
          this.type = params.get('type');
          this.searchProduct= this.filteredProduct = (this.type) ?
            this.product.filter(p => p.type === this.type) : this.product;     
        });

   this.subscription= (await this.cartService.getCart()).valueChanges().subscribe(
      cart => { 
        this.shoppingCart = cart;
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
    this.productsubscription.unsubscribe();
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
