import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  constructor(private profileService:OrderService) { }

  ngOnInit() {
    this.profileService.showbeneficiaryOrder().subscribe(
      res=>{
        console.log(res)
      }
    )

    
  }

  

}
