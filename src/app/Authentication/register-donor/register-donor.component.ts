import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit,AfterViewInit {
  message = "Sign Up";
  type = "donor";
  country="India";
  
  constructor(private authService:AuthenticateService,private router:Router,private progressService:NgProgress) { }

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
      });}
  onSubmit(form:NgForm){
    console.log(form.value); 

    this.message = "Loading ..."
    this.authService.registerdonor(form.value).subscribe(
      response=>{ console.log(response)
      this.router.navigate(['/login-donor'])
      },
      error=>{console.log(error)}
    )
  }

}
