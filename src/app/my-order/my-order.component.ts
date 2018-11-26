import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   orders:[
     {
      id:1234,
       desc:'Rice',
       location:'Rajpur',
       imagePath:'url'
     },
     {
      id:1234,
       desc:'Rice',
       location:'Rajpur',
       imagePath:'url'
     }
   ]
}
