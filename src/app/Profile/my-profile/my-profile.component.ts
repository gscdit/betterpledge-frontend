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
     
   };
  

  constructor(public authenticateService:AuthenticateService,private router:Router,private httpService:HttpService) { }
   edit:boolean;
  ngOnInit() {
    this.httpService.getProfile().take(1).subscribe(res=>{
     this.title=res['user']
     console.log(res['user'])
    })
  }
  onEdit(){
   this.edit=!this.edit;
    }
    errorshow=false;
  onSave(form:NgForm){
    
    console.log(form.value);
    this.httpService.changeProfile(form.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token',res['token'])
      if(res['message']===0)
      {
        this.errorshow=true;
      }
    });
    if(this.errorshow===false){
    this.edit=!this.edit;}
  }
}
