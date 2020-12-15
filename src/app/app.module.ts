import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms module
import { FormsModule } from '@angular/forms';

//ng2-validation (a library for forms validation).
import { CustomFormsModule } from 'ng2-validation';

import { DataTableModule } from 'angular5-data-table';

//angular-4-data-table (a library for table pagination and soritn etc g).


//For Firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//ng bootstrap imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//my imports
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //forms module
    FormsModule,

    //ng2-validations Module(For applying validations to forms)
    CustomFormsModule,

    DataTableModule,

    //for firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    //ng-bootstrap imports
    NgbModule,

    //my imports
    RouterModule.forRoot([
      //routes available to anonymous users
      {path:'',component:ProductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'login',component:LoginComponent},
      //routes available to only logged in users
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},
      //now defining routes
      {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      
    ]),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    //Firebase services
    UserService,  //for authentication
    CategoryService,  //for getting categories from firebase
    ProductService,   //for stroing products to firebase 
    ShoppingCartService,  // to set ang get cart id from firebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
