import { AppUser } from 'src/models/app-user';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private userService:UserService) { }
  /*canActivate() {
    return this.auth.user$
    .switchMap(user=> this.userService.get(""))
    .map(app_user => app_user.isAdmin)
  }*/

  canActivate() {
    return this.auth.appUser$
    .map(app_user => {
      if(app_user) return app_user.isAdmin
      else return false
    })
  }

  /**
   * return this.auth.user$
    .switchMap(user=> this.userService.get(""))
    .map(app_user => app_user.isAdmin)
   */

}
