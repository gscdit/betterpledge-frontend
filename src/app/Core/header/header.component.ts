import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../Service/authentication.service';
import { ShoppingCartService } from './../../Service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart$;
  constructor(private router: Router, public authService: AuthenticateService, private cartService: ShoppingCartService) { }
  totalQuantityCount: number;
  subscription: Subscription
  async ngOnInit() {
    let cart = await this.cartService.getCart();
    this.subscription = cart.valueChanges().subscribe(cart => {
      //  this.cart$=cart.payload.val()['items']
      // console.log(cart.payload.val()['items'])
      this.totalQuantityCount = this.cartService.totalCount(cart)
    }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
 



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
