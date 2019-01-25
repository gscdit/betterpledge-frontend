import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit, AfterContentInit {

  type = "donor";
  country = "India";

  constructor(private authService: AuthenticateService, private router: Router, private progressService: NgProgress) { }

  ngOnInit() {
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
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    this.authService.registerdonor(form.value).subscribe(
      response => {
        console.log(response)
        this.progressService.done();
        this.router.navigate(['/user/login-donor']);
      },
      error => {
        console.log(error);
        this.progressService.done();
      }
    )
  }

}
