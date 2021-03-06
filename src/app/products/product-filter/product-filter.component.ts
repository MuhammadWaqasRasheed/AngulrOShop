import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent  {

  categories$:any
  @Input('category') category:any;

  constructor(private categoryService:CategoryService,) {

    this.categories$=categoryService.getCategories()
   }
}
