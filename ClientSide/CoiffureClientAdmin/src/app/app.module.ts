import { AdminService } from './Admin/admin.service';
import { AdminComponent } from './Admin/LOGIN/Admin.LOGIN.component';



 import { CityListComponent } from './City/List/City.List.component';
 import { CityAddComponent } from './City/add/City.add.component';
 import { CityService } from './City/City.service';

 import { categoryService } from './Category/Category.service';
 import { CategoryListComponent } from './Category/List/Category.List.component';
 import { CategoryAddComponent } from './Category/add/Category.add.component';
// import { UserRegisterComponent } from './User/register/User.register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { UserLoginComponent } from './User/User_LOGIN/User_LOGIN.component';
// import { UserService } from './User/User.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'
import { FormsModule } from '@angular/forms';

 import { ProductListComponent } from './Product/List/Product.List.component';
 import { ProductAddComponent } from './Product/add/Product.add.componenet';
 import { ProductService } from './Product/Product.service';

// import { VendorInfoListComponent } from './VendorInfo/List/VendorInfo.List.component';
// import { VendorInfoService } from './VendorInfo/VendorInfo.service';
// import { VendorInfoAddComponent } from './VendorInfo/add/VendorInfo.add.component';

const routes: Route[] = [
   // { path: '', redirectTo: '/User-login', pathMatch: 'full'},

  //  { path: 'User-User_LOGIN', component: UserLoginComponent },
  //  { path: 'User-register', component: UserRegisterComponent },
  //  {path:'',component: AdminComponent},
   {path:'Admin-Login',component: AdminComponent},
    { path: 'Category-List',component: CategoryListComponent},
    {path: 'Category-add',component :CategoryAddComponent},
    {path: 'Product-List',component:ProductListComponent},
    {path: 'Product-add',component: ProductAddComponent},
    {path: 'City-add',component:CityAddComponent},
    {path: 'City-List', component:CityListComponent},
   // {path: 'VendorInfo-List',component: VendorInfoListComponent},
   // {path: 'VendorInfo-add',component:VendorInfoAddComponent}
];

 @NgModule({
  declarations: [
    AppComponent,
    // UserLoginComponent,
    // UserRegisterComponent,
    AdminComponent,
     CategoryAddComponent,
     CategoryListComponent,
     ProductListComponent,
     ProductAddComponent,
     CityAddComponent,
     CityListComponent,
    // VendorInfoListComponent,
    // VendorInfoAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    AdminService,
    categoryService,
    // UserService,
     ProductService,
     CityService,
    // VendorInfoService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
