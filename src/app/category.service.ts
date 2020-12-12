import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, Query } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories()
  {
      let data=this.db.list('/categories').valueChanges()
      return data;
  }
}
