import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lightning-fast-deal',
  templateUrl: './lightning-fast-deal.component.html',
  styleUrls: ['./lightning-fast-deal.component.css']
})
export class LightningFastDealComponent implements OnInit,AfterContentInit {

  constructor(private progressService: NgProgress,private router:Router,private titleService: Title) { }

  ngOnInit() {
   this.titleService.setTitle('Stationary')
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
