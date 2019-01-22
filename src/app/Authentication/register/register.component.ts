import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,AfterContentInit{
  
  registerUserData: any={};
  type="beneficiary";
  message = "Sign Up";
  country="India"

  constructor(private httpService:HttpService,private authService:AuthenticateService,private router:Router,private progressService:NgProgress) { }
  ngOnInit() {
    
  }
  ngAfterContentInit() {
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
      
  response1:any;
  onSubmit(form:NgForm){
   this.progressService.start();
   console.log(form.value);
    this.authService.register(form.value).subscribe(
      response=>{ console.log(response)
        this.progressService.set(0.1);
        this.progressService.inc(0.2);
        this.progressService.done();
      this.router.navigate(['/login'])
      }
    )
  }    
}
