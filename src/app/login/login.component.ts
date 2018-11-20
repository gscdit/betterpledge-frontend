import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(form:NgForm){
    this.authService.login(form.value).subscribe(
      response=>{console.log(response)
      localStorage.setItem('token',response.token)//(key,value)
       this.router.navigate(['/'])
      },
      error=>{
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }
  
  

}
