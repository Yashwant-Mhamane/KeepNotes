import { Injectable } from '@angular/core';
import { KeepNoteService } from './keepnote.service';
import { note } from './model/note';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 isAdminLog:boolean = false;
 isNormalUser:boolean=false;
 userData:note|undefined

  constructor(private userservice:KeepNoteService) { }
  checkLogIn(username:string,userpassword:string){
    if(username=='yash' && userpassword=='yash'){
      this.isAdminLog=true;
    }else (username == 'yash' && userpassword != 'yash')
    {
      alert('password incorrect');
    }

  }
}
