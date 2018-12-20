import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Service/http.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

   title={
     name:this.authenticateService.currentUser().name,
     username:this.authenticateService.currentUser().username,
     email:this.authenticateService.currentUser().username,
     phone_no:this.authenticateService.currentUser().username,
     address:this.authenticateService.currentUser().exp
   }
  

  constructor(public authenticateService:AuthenticateService,private router:Router,private httpService:HttpService) { }
   edit:boolean;
  ngOnInit() {
  }
  onEdit(){
   this.edit=!this.edit;
    }
  onSave(form:NgForm){
    
    console.log(form.value);
    // this.httpService.changeProfile(form.value)
  }
}
