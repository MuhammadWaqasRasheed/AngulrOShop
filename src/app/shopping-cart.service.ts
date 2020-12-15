import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  create(){
      return this.db.list('/shopping-carts').push({
        dateCreated:new Date().getTime()
      })
  }

  getCart(cartId:string)
  {
    return this.db.object('/shopping-carts'+cartId).snapshotChanges()
  }

  //if in our function we are dealing a promise and we donot like to use .then method than write
  //async keyword in the function and write await keyword before that which returns a promise.
  private async addOrCreateCart(){
    let cartId=localStorage.getItem('cartId')
    if(!cartId){
      let result=await this.create()
        localStorage.setItem("cartId",result.key)
        return this.getCart(result.key)
    }
    else
      return this.getCart(cartId)
  }
}
