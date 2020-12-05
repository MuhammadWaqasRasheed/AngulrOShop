import { Injectable } from '@angular/core';
//Firebase imports
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User | null>

  constructor(public auth:AngularFireAuth,private route:ActivatedRoute,private router:Router) { 
    this.user$=this.auth.authState;  //assigning firebase.User Observable to user datamember
  }


  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user=>{
      //when user logs in than we suscrice that promise and navigate to
      //1)home page if he directly click the login page 
      //2)from some where wlse page he is redirected to login page
      this.router.navigate([returnUrl])
    })
  }

  logout(){
    this.auth.signOut();
  }
}
