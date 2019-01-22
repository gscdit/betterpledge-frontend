import { Component, OnInit,  AfterContentInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { NgProgress } from 'ngx-progressbar';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit,AfterContentInit {
  orders=[];
  constructor(private profileService:OrderService,private progressService:NgProgress,private router:Router) { }
   
  ngOnInit() {
    this.profileService.showbeneficiaryOrder().subscribe(
      res=>{
        this.orders=res['orders']
        console.log(this.orders)
      }
    )
  }

  ngAfterContentInit() {
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.progressService.start();
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {     
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
          this.progressService.done();
            }
        });
}

  

}
