import { ProductService } from './../../product.service';
import { Observable } from 'rxjs';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$:Observable<any>

  constructor(categoryService:CategoryService,private productService:ProductService) { 
    this.categories$=categoryService.getCategories()
  }

  ngOnInit(): void {

  }

  save(product:any)
  {
    console.log(product)
    this.productService.create(product)
  }

}
