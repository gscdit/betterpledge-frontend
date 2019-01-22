import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit {

  constructor(private router:Router,private progressService:NgProgress) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
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
