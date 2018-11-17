import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../Service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(form:NgForm){
    this.authService.login(form.value).subscribe(
      response=>{console.log(response)
      localStorage.setItem('token',response.token)//(key,value)
       this.router.navigate(['/'])
      },
      error=>console.log(error)
    )
  }
}
