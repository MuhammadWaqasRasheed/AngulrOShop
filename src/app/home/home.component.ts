import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private db:AngularFireDatabase) {
    /*this.db.list('/products').snapshotChanges()
    .map(items=>{
      return items.map(a => ({ key: a.key , data:a.payload.val() }))
    })
    .subscribe(x=>{
      console.log(x);
    });*/
    this.db.list('/categories').snapshotChanges()
    .map( categories =>{
      return categories.map(category => ({ key:category.key , data:category.payload.val() }))
    })
    .subscribe(x=>{
      console.log(x);
    })
  }
    
    
  }  

