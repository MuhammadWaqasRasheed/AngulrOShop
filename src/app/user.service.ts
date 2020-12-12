import { Injectable, OnInit } from '@angular/core';
//imports for firebase
import firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject, snapshotChanges } from '@angular/fire/database';
import { AppUser } from 'src/models/app-user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor(private db:AngularFireDatabase) { }

  save(user:firebase.auth.UserCredential){
    this.db.object('users/'+user.user?.uid).update({
      name:user.user?.displayName,
      email:user.user?.email
    })
  }

  //returns database refrence to that userobject 
  get(uid:string)
  {
    return this.db.object('users/'+uid).valueChanges().map(user=>{
      let myUser:any=user
      let appUser:AppUser=myUser
      return appUser
    });
  }

  
  
}
