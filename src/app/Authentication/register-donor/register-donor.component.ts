import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {

  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    // this.httpService.sendData(this.registerUserData).subscribe(
    //    response=>console.log('Whats'+response),
    //    error=>console.error('Error'+error))
    console.log(form.value); 
    this.authService.registerdonor(form.value).subscribe(
      response=>{ console.log(response)
      // localStorage.setItem('token', response.token)
      this.router.navigate(['/login'])
      },
      error=>{console.log(error)}
    )
  }

}
