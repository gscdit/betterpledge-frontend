import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../Service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public authService:AuthenticateService) { }

  ngOnInit() {
    
  }

  onNav(){
   this.router.navigate(['/Login']);
  }
}
