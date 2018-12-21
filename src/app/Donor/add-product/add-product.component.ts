import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSave(value:NgForm){
    console.log(value);
    this.route.navigate(['/donor/donatedProduct'])
  }
}
