import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './../../Service/authentication.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    product={'description':null,
    'type':null,
    'quantity':null,
    'image':null
    };
    id;
  constructor(private route:ActivatedRoute,
    private router:Router,private ps:ProductsService,
    private http:HttpClient,public AuthService:AuthenticateService) {}

    ngOnInit() {
      console.log(this.AuthService.currentUser())
      this.id=this.route.snapshot.paramMap.get('id')   //to get :id from url
     if(this.id)
      {this.ps.getSingleProduct(this.id).take(1)
      .subscribe(res=>{this.product=JSON.parse(res),console.log(this.product)} ); 
     }    
  }

  delete(){
    if(!confirm("Are you sure you want to delete this product?")) return;{
    this.ps.deleteProduct(this.id).subscribe(res=>{
      this.router.navigate(['/donor/donatedProduct'])}
    );}
  }

  onSave(value:NgForm){
    if(this.id){
       this.ps.updateProduct(value,this.id).subscribe(res=>{
        this.router.navigate(['/donor/donatedProduct']);
      },
      error=>{
      console.log(error);  
      });
      }else{
    this.ps.addProduct(value).subscribe(res=>{
      this.router.navigate(['/donor/donatedProduct']);
    },
    error=>{
    console.log(error);  
    });}
  }
}
