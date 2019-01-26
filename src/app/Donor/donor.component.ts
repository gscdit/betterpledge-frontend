import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate($event){
    window.scroll(0,0);
  }

}
