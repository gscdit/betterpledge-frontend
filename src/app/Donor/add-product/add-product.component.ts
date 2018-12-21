import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route:Router,private ps:ProductsService) { }
  mydata=true;
  ngOnInit() {
  }
  onSave(value:NgForm){
 
    this.ps.addProduct(value).subscribe(res=>{
      this.route.navigate(['/donor/donatedProduct']);
    },
    error=>{
    console.log(error);  
    });
  }
}
