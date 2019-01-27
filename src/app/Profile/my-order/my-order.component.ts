import { Component, OnInit,  AfterContentInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { NgProgress } from 'ngx-progressbar';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit,AfterContentInit {
  orders=[];
  loader=true;
  constructor(private profileService:OrderService,private progressService:NgProgress,
    private router:Router,private titleService:Title) { }
   
  ngOnInit() {
    this.titleService.setTitle('My Orders')
    this.profileService.showbeneficiaryOrder().subscribe(
      res=>{
        this.loader=false;
        this.orders=res['orders']
        console.log(this.orders.length)
      }
    )
  }

  ngAfterContentInit() {
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.progressService.start();
                this.progressService.set(0.1);
                this.progressService.inc(0.2);
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {     
          this.progressService.done();
            }
        });
}

  

}
