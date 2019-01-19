import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent implements OnInit {

  invalidLogin: boolean;
  message = "Login"
  type="donor"
  constructor(private authService:AuthenticateService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  
  onSubmit(form:NgForm){
    console.log(form.value);

   
    this.authService.login(form.value).subscribe(
      response=>{console.log(response)
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
        if( response===null){
          this.invalidLogin = true;
          return;
        }else{
        sessionStorage.setItem('token',response.token)//(key,value)
         this.router.navigate([returnUrl || '/'])}
      },
      error=>{
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }
  
  


}
