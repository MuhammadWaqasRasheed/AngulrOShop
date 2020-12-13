import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  //creates a new object
  create(product:any)
  {
    return this.db.list('/products').push(product)
  }

  //updates an existing object
  update(productID:any,product:any)
  {
    return this.db.object('/products/'+productID).update(product)
  }
  //retrieves a single object from firebase
  get(productId:any)
  {
    return this.db.object('/products/'+productId).valueChanges();
  }

  //deletes an object from datbase
  delete(productID:any)
  {
    return this.db.object('/products/'+productID).remove()
  }

  getAll()
  {
    return this.db.list('/products').snapshotChanges()
    .map(items=>{
      return items.map(a => ({ key: a.key , data:a.payload.val() }))
    })
  }
}
