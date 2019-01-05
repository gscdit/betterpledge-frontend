import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Service/products.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from './../../Service/shopping-cart.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  product=[];
  filteredProduct=[];
  type: string;
  shoppingCart;
  totalQuantity(){
    return this.filteredProduct.length;
  }
  constructor(private route:ActivatedRoute,
    private router:Router,
     private ps:ProductsService,
    private cartService:ShoppingCartService) {
      this.cartService.getCart().subscribe(res=>{
        this.shoppingCart=res;
      })
    } 

  ngOnInit() { 
    this.ps.getAll().take(1).switchMap(
      p=>{
        this.product=p.listing;
       return this.route.queryParamMap})
       .subscribe(
          params=>{
            this.type=params.get('type');
            this.filteredProduct=(this.type)?
          this.product.filter(p=>p.type===this.type):this.product;
          });
  }

  
  removeFromCart(product){
    console.log(product)
   this.cartService.removeFromCart(product)
  }

  detailPage(product){
    this.router.navigate(['/product/detail',product.listing_id]);
  }

  addToCart(product){ 
    console.log(product)
  // this.cartService.addToCart(product)
  
 sessionStorage.setItem('product',JSON.stringify(product))


  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
   let item= this.shoppingCart
   return item ? item.quantity : 0;
  }
}
