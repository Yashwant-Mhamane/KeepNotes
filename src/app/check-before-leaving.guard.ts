import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Myinterface } from './model/canintf';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CheckBeforeLeavingGuard implements CanDeactivate<Myinterface> {
  canDeactivate(
    component: Myinterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(component.addressForm.touched){
  //       var val = confirm("Do you want to leave this page")
  //        return val;
  //      }else{
  //        return false;
  //      }

       return component.canExit();

  }

}
