import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
   
  onActivate(event) {
    window.scroll(0,0);
}
}
