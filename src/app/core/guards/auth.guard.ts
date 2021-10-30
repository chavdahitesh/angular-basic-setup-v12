import { GlobalService } from './../services/global/global.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isExpired:boolean = false
  isLoggedin:boolean = false
  jwtHelper = new JwtHelperService();
  constructor(private globalService:GlobalService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let hasAccessToken = localStorage.getItem('access-token');
      if (hasAccessToken) {
        this.isExpired = this.jwtHelper.isTokenExpired(hasAccessToken);
        if (!this.isExpired) {
          return true;
        }
      }
      this.globalService.logout();
      this.isLoggedin = false;
      return false;
  }

  canDeactivate(component: any) {
    let canDeactivateComponent = component.canDeactivate();
    if (canDeactivateComponent) return true;
    else return false;
  }
}
