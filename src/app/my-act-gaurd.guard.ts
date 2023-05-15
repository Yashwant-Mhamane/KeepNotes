import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyActGaurdGuard implements CanActivate {
  constructor(private routerservice: Router, private ls: LoginServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ls.isAdminLog)
      {
         return true;
      }
      else
      {
       this.routerservice.navigateByUrl("login")
       return false;
      }
  }

}
