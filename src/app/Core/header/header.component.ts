import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../Service/authentication.service';
import { ShoppingCartService } from './../../Service/shopping-cart.service';
import { Subscription } from 'rxjs';
import { NgProgress } from 'ngx-progressbar'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  cart$;
  constructor(private router: Router, public authService: AuthenticateService, 
    private cartService: ShoppingCartService) {}

  totalQuantityCount: number;
  subscription: Subscription
  async ngOnInit() {
    window.onscroll = _ => {
      if (window.pageYOffset > document.getElementById("header").offsetTop) {
        document.getElementById("header").classList.add("fixed-top");
      }
      else {
        document.getElementById("header").classList.remove("fixed-top");
      }
    };
    let cart = await this.cartService.getCart();
    this.subscription = cart.valueChanges().subscribe(cart => {      
    this.totalQuantityCount = this.cartService.totalCount(cart)
    }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  onNav() {
    this.router.navigate(['/user/login']);
  }

  navbarOpen = false;

  toggleNavbar() {
   document.getElementById('navbarResponsive').classList.remove('show');
  }

  logout(){
    this.authService.logout();
    document.getElementById('navbarResponsive').classList.remove('show');
  }

}
