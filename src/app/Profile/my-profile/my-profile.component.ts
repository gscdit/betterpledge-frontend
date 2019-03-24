import { Component, OnInit, AfterContentInit, OnDestroy, ViewChild, ElementRef,ChangeDetectionStrategy } from '@angular/core';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { NgProgress } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { NgoVerificationService } from './../../Service/ngo-verification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit,AfterContentInit,OnDestroy {

  title = {
  };
  edit: boolean;
  profileSubs: Subscription;

  constructor(public authenticateService: AuthenticateService, private router: Router, 
    private httpService: HttpService, private progressService: NgProgress,
    private titleService:Title,private ngoService: NgoVerificationService
    ,private modal:NgbModal) { }

  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.progressService.start();
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.progressService.done();
        }
      });
    }
    
  @ViewChild('content') content:ElementRef;
 
  

  ngOnInit() {
    console.log(this.authenticateService.currentUser())
    this.titleService.setTitle('My Profile')
   this.profileSubs= this.httpService.getProfile().subscribe(res => {
      this.title = res['user']
      console.log(res['user'])
      if(this.authenticateService.currentUser().status===0)
      this.openVerticallyCentered(this.content)
    })
  }

  close(){
    this.modal.dismissAll('Close click');
  }



  onEdit() {
    this.edit = !this.edit;
  }

  errorshow = false;


  onSave(form: NgForm) {
    console.log(form.value);
    this.httpService.changeProfile(form.value).subscribe(res => {
      console.log(res)
      sessionStorage.setItem('token', res['token'])
      if (res['message'] === 0) {
        this.errorshow = true;
      }
    });
    if (this.errorshow === false) {
      this.edit = !this.edit;
    }
  }

  ngo(value:NgForm){
    console.log(value.value)
   this.ngoService.sendDetails(value.value).subscribe(res=>{
     console.log(res['token'])
     sessionStorage.setItem('token',res['token'])
     this.close()
   })
  }

  openVerticallyCentered(content) {
    this.modal.open(content, { centered: true });
  }

  ngOnDestroy(){
    this.profileSubs.unsubscribe();
  }
}
