import { Observable, Subscription } from 'rxjs';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from 'src/models/products';
import { DataTableResource }  from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

  products:Products[]=[];
  subscription:Subscription
  //now defining fields for angular 5 data table
  tableResource:DataTableResource<Products>;
  items:Products[]=[];
  itemCount:number=0;

  constructor(private productService:ProductService) {
    let p:any  //write this just to remove compilation error
    this.tableResource=p
      this.subscription= productService.getAll()
      .map(x=>{
        let p:any=x
        let t:Products=p
        return p
      })
      .subscribe(products=>{
        this.products=products
        this.initializeTable(products)
      })
   }

   private initializeTable(products:Products[])
   {
      //for our data table
      this.tableResource=new DataTableResource(products);
      this.tableResource.query({offset:0})
        .then(items=>this.items=items)
      this.tableResource.count()
        .then(count=> this.itemCount=count);
   }

  //here params is an argument containing meta-data about table.
  //this function will automatically be called when we chage table properties
   reloadItems(params:any){
     if(!this.tableResource) return;
     console.log(params)
     this.tableResource.query(params)
      .then(items=>this.items=items)
   }


  filter(query:string)
  {
    let filteredProducts=(query)?
    this.products.filter(p=>p.data.title.toLowerCase().includes(query.toLowerCase()))
    :this.products;
    //To update our table
    this.initializeTable(filteredProducts)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }


}
