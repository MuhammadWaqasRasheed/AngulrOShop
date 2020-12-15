import { Products } from './../../models/products';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products:any;
  filteredProducts:Products[]=[];
  category:any

  constructor(productService:ProductService,private route:ActivatedRoute )
  { 
    this.products=[]
    productService.getAll().switchMap(products=>{
      this.products=products;
      return this.route.queryParamMap
    }) 
    .subscribe(params=>{
      this.category=params.get('category');
      //now filtering
      this.filteredProducts=(this.category)?
      this.products.filter(p => p.data.category==this.category)
      :this.products;
    })
  }//constructor ending.
}
