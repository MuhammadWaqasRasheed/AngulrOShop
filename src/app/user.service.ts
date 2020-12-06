import { Injectable } from '@angular/core';
//imports for firebase
import firebase from 'firebase/app';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  save(){
    let data={"truth":"Allah Almighty Is Greatest OF All"}
    this.firestore.collection('users').add(data).then(res=>{console.log('Successfull')},err=>{console.log(err)})
  }
}
