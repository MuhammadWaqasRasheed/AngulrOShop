import { ShoppingCartService } from './../shopping-cart.service';
import { Products } from 'src/models/products';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product:any
  @Input('show-actions') showActions=true;
  constructor(private cartService:ShoppingCartService) {  }

  addToCart(product:Products){
    
  }

}
