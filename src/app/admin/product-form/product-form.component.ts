import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { Observable } from 'rxjs';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$:Observable<any>
  product={}
  id:any   //this id refers to firebase object 

  constructor(
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private productService:ProductService,
    private router:Router
    )
  { 
    this.categories$=categoryService.getCategories()
    //extracting id from url if any
    this.id=this.route.snapshot.paramMap.get('id')
    if(this.id)  //if id exists than load product data against that product
    {
      this.productService.get(this.id).take(1).map(x=>{
        let p:any=x;
        let obj:object=p
        return obj
      }).subscribe(p=> this.product=p)
    }
  }

  ngOnInit(): void {

  }

  save(product:any)
  {
    //actually product here is form data
    if(this.id)  //if id is set than we have o update the existing object
      this.productService.update(this.id,product);
    else
      this.productService.create(product)
    //now redirecting the user to admin/products page
    this.router.navigate(['admin/products']);
  }

  delete()
  {
    if(!confirm("Are you Sure You Want to Delete This Product ?")) return;
    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
  }

}
