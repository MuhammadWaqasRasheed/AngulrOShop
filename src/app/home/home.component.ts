import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private db:AngularFireDatabase) {
    let data=this.db.object('users/'+1).valueChanges().subscribe(obj=>{
      console.log(obj)
    })
    
  }  

}
