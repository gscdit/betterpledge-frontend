import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';
import { NgProgress } from 'ngx-progressbar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donor-product',
  templateUrl: './donor-product.component.html',
  styleUrls: ['./donor-product.component.css']
})
export class DonorProductComponent implements OnInit,AfterContentInit,OnDestroy {
  products$=[];
  product:Subscription;
  loader=true;
  constructor(private router:Router,private ps:ProductsService,private progressService:NgProgress) {
    
   }
  
  ngOnInit() {
    this.product=this.ps.getUserProduct().subscribe(p=>{
      this.loader=false;
      console.log(p.listings.length)
      this.products$=p.listings}
      )
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
      });}
      
  donate(){
    this.router.navigate(['/donor/addProduct']); 
  }

  ngOnDestroy(){
    this.product.unsubscribe();
  }
  
}
