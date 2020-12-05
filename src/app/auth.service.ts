import { Injectable } from '@angular/core';
//Firebase imports
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User | null>

  constructor(public auth:AngularFireAuth) { 
    this.user$=this.auth.authState;  //assigning firebase.User Observable to user datamember
  }


  login(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.auth.signOut();
  }
}
