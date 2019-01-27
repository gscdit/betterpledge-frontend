import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   orders=[];
  constructor(private orderService:OrderService,private titleService:Title) { }
   loader=true;
  ngOnInit() {
    this.titleService.setTitle('Notification')
   this.orderService.notification().subscribe(res=>{
     this.loader=false;
     console.log(res);
     this.orders=res['orders'];
     console.log(this.orders)
   })
  }

}
