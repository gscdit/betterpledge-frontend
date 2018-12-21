import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private authService:AuthenticateService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  
  onSubmit(form:NgForm){
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      response=>{console.log(response)
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
      localStorage.setItem('token',response.token)//(key,value)
       this.router.navigate([returnUrl || '/'])
      },
      error=>{
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }
  
  

}
