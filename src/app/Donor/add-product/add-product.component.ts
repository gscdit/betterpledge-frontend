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
     product={};
     id;
  constructor(private route:ActivatedRoute,
    private router:Router,private ps:ProductsService) {
       this.id=this.route.snapshot.paramMap.get('id')   //to get :id from url
      if(this.id) {this.ps.getSingleProduct(this.id).take(1).subscribe(res=>{this.product=JSON.parse(res),console.log(this.product)} );  }    
     }
  ngOnInit() {
  }
  delete(){
    this.ps.deleteProduct(this.id);
  }
  onSave(value:NgForm){
    if(this.id){
       this.ps.updateProduct(value,this.id)
      }
    this.ps.addProduct(value).subscribe(res=>{
      this.router.navigate(['/donor/donatedProduct']);
    },
    error=>{
    console.log(error);  
    });
  }
}
