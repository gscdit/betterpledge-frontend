import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../Service/authentication.service';
import { ShoppingCartService } from './../../Service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthenticateService, private cartService: ShoppingCartService) { }
  totalQuantityCount: number;
  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      for (let cart_id in res) {
        this.totalQuantityCount += 0
      }
    })

     // // When the user scrolls the page, execute myFunction 
  window.onscroll = _ => {
    if (window.pageYOffset > document.getElementById("header").offsetTop) {
      document.getElementById("header").classList.add("fixed-top");
    }
    else {
      document.getElementById("header").classList.remove("fixed-top");
    }
  };
  }

  onNav() {
    this.router.navigate(['/Login']);
  }

}
