import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../Service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {

  }

}
