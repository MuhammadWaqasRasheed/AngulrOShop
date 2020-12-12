import { UserService } from './user.service';
import { Injectable } from '@angular/core';
//Firebase imports
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'src/models/app-user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User |null>

  constructor(public auth:AngularFireAuth,private route:ActivatedRoute,private router:Router,private userService:UserService) { 
      this.user$=this.auth.authState;  //assigning firebase.User Observable to user datamember
  }


  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user=>{
      console.log(user.user?.uid)
      //when user logs in save it to our database
      this.userService.save(user)
      //when user logs in than we suscrice that promise and navigate to
      //1)home page if he directly click the login page 
      //2)from some where wlse page he is redirected to login page
      this.router.navigate([returnUrl])
    })
  }

  logout(){
    this.auth.signOut();
  }

  get appUser$():Observable<AppUser |null>
  {
    return this.user$
    .switchMap(user=> {
       if(user) return this.userService.get(user.uid)
       return Observable.of(null)
    });
  }
}
