import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Service/products.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  product;
  constructor(private ps:ProductsService) { 
    this.ps.getAll().take(1).subscribe(
        p=>{console.log(p.listing[0])
          this.product=p.listing
        }
      )
        
  }

  ngOnInit() { 
  }

}
