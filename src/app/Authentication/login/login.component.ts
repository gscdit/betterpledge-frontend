import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentInit {
  invalidLogin: boolean;
  message = "Login";
  type="beneficiary"
  constructor(private authService:AuthenticateService,private router:Router,private route:ActivatedRoute,private progressService:NgProgress) { }

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
  onSubmit(form:NgForm){
    console.log(form.value);
    this.progressService.start();
    this.authService.login(form.value).subscribe(
      response=>{console.log(response)
        this.progressService.set(0.1);
        this.progressService.inc(0.2);
        this.progressService.done();
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
        if( response===null){
          this.invalidLogin = true;
          return;
        }else{
        sessionStorage.setItem('token',response.token)//(key,value)
         this.router.navigate([returnUrl || '/'])}
      },
      error=>{
        this.progressService.set(0.1);
        this.progressService.inc(0.2);
        this.progressService.done();
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }
  
  

}
