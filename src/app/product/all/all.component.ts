import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Service/products.service';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  product;
  constructor(private ps:ProductsService) { 
    this.ps.getAll().map((res)=>{
      console.log(res.json())
      res.json();
    }).subscribe(p=>{
      console.log(p);
    })
  }

  ngOnInit() {
  }

}
