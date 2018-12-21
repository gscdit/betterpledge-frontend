import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-product',
  templateUrl: './donor-product.component.html',
  styleUrls: ['./donor-product.component.css']
})
export class DonorProductComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit() {
  }
  donate(){
    this.router.navigate(['/donor/addProduct'])
  }
}
