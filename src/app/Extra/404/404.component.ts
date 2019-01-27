import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})
export class NotFoundComponent implements OnInit,AfterContentInit {

  constructor(private router:Router,private progressService:NgProgress,
    public authService:AuthenticateService,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Not Found')
  }
  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
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
