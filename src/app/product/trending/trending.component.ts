import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit,AfterContentInit {

  constructor(private progressService:NgProgress,private router:Router) { }

  ngOnInit() {
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
