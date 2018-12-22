import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
     product;
  constructor(private route:ActivatedRoute,
    private router:Router,private ps:ProductsService) {
      let id=this.route.snapshot.paramMap.get('id')   //to get :id from url
      if(id) this.ps.getSingleProduct(id).subscribe(p=>this.product=p);      
     }
  ngOnInit() {
  }
  onSave(value:NgForm){
 
    this.ps.addProduct(value).subscribe(res=>{
      this.router.navigate(['/donor/donatedProduct']);
    },
    error=>{
    console.log(error);  
    });
  }
}
