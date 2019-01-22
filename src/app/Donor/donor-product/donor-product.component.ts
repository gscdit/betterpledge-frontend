import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-donor-product',
  templateUrl: './donor-product.component.html',
  styleUrls: ['./donor-product.component.css']
})
export class DonorProductComponent implements OnInit,AfterViewInit {
  products$: {};
  
  constructor(private router:Router,private ps:ProductsService,private progressService:NgProgress) {
    
   }
  
  ngOnInit() {
    this.ps.getUserProduct().take(1).subscribe(p=>{console.log(p)
      this.products$=p.listings}
      )
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
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
      });}
      
  donate(){
    this.router.navigate(['/donor/addProduct'])
  }
  
}
