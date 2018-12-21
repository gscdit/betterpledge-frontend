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

 


  
  constructor(private httpService:HttpService,private authService:AuthenticateService,private router:Router) { }

  ngOnInit() {
    
  }



  response1:any;

  
  
  onSubmit(form:NgForm){
    // this.httpService.sendData(this.registerUserData).subscribe(
    //    response=>console.log('Whats'+response),
    //    error=>console.error('Error'+error))
    console.log(form.value);
    
    this.authService.register(form.value).subscribe(
      response=>{ console.log(response)
      // localStorage.setItem('token', response.token)
      this.router.navigate(['/login'])
      },
      error=>{console.log(error)}
    )
  }
    
}
