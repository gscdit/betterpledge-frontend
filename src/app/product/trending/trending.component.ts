import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit,AfterContentInit {

  constructor(private progressService:NgProgress,private router:Router,
    private titleService:Title) { }

  ngOnInit() {
      this.titleService.setTitle('Clothes')
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
