import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   orders=[];
  constructor(private orderService:OrderService) { }
   loader=true;
  ngOnInit() {
   this.orderService.notification().subscribe(res=>{
     this.loader=false;
     console.log(res);
     this.orders=res['orders'];
     console.log(this.orders)
   })
  }

}
