import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-donor-product',
  templateUrl: './donor-product.component.html',
  styleUrls: ['./donor-product.component.css']
})
export class DonorProductComponent implements OnInit {
  products$: {};
  
  constructor(private router:Router,private ps:ProductsService) {
    this.ps.getUserProduct().take(1).subscribe(p=>{console.log(p)
    this.products$=p.listings}
    )
   }
  
  ngOnInit() {
  }
  donate(){
    this.router.navigate(['/donor/addProduct'])
  }
  
}
