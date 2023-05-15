import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { KeepNoteService } from '../keepnote.service';
import { LoginServiceService } from '../login-service.service';
import { Myinterface } from '../model/canintf';
import { user } from '../model/user';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements Myinterface{

   username:string='';
   userpassword:string='';
    uData:user|undefined;
    constructor(private ls: LoginServiceService, private rs: Router) {}
  canExit(){
          if(this.username==""|| this.userpassword==""){
        var val = confirm("Do you want to leave this page")
         return val;
       }else{
         return false;
   }
  }
    userLogin() {
      this.ls.checkLogIn(this.username, this.userpassword);
      setTimeout(() => {
        if (this.ls.isAdminLog) this.rs.navigateByUrl('addnotes');
      }, 2000);
    }

}
