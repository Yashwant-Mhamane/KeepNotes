import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public ls:LoginServiceService,private r:Router){}

  logout()
  {
    this.ls.isAdminLog=false;
   
    this.r.navigateByUrl("login")
  }
}
