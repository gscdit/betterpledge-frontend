import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: any={};
  type="beneficiary";
  message = "Sign Up";
  constructor(private httpService:HttpService,private authService:AuthenticateService,private router:Router) { }
  ngOnInit() {
    
  }
  response1:any;
  onSubmit(form:NgForm){
   console.log(form.value);

   this.message = "Loading ..."
    this.authService.register(form.value).subscribe(
      response=>{ console.log(response)
      this.router.navigate(['/login'])
      }
    )
  }    
}
