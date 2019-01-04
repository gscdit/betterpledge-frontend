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

  constructor(private router: Router,public authService:AuthenticateService,private cartService:ShoppingCartService) { }
  totalQuantityCount:number;
  ngOnInit() {
    this.cartService.getCart().subscribe(res=>{
      for(let cart_id in res){
      this.totalQuantityCount+=0
      }
    })
  }

  onNav(){
   this.router.navigate(['/Login']);
  }
}
