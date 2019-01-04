import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id
  product
  constructor(private ps:ProductsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.ps.getSingleProductFromAll(this.id);
  }
  

}
