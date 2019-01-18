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
  message = "Sign Up";
  type = "donor";
  country="India";
  
  constructor(private authService:AuthenticateService,private router:Router) { }

  ngOnInit() {
  }
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
