import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, Query } from '@angular/core';
import 'rxjs/add/operator/map';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories()
  {
    return this.db.list('/categories').snapshotChanges()
    .map( categories =>{
      return categories.map(category => ({ key:category.key , data:category.payload.val() }))
    })
  }
}
