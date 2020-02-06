 import { UserService } from './User/User.service';
 import { UserRegisterComponent } from './User/register/User.register.component';
 import { UserLoginComponent } from './User/User_LOGIN/User_LOGIN.component';
 import { HomeService } from './Home/home.service';
 import { ContactUsService } from './ContactUs/contact-us.service';
 import { AboutUsService } from './aboutUs/about-us.service';
 import { HomeComponent } from './Home/Home.component';
 import { ContactUSComponent } from './ContactUs/ContactUs.component';
 import { aboutUsComponent } from './aboutUs/aboutUs.component';
 import { ServicesService } from './Services/services.service';
 import { ServicesComponent } from './Services/Services.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const routes:Route[] = [
   {path:'aboutUs', component:aboutUsComponent},
   {path:'ContactUs', component: ContactUSComponent},
   {path:'Home', component: HomeComponent},
   {path:'Services', component:ServicesComponent},
   {path:'User-register',component:UserRegisterComponent},
   {path:'User-LOGIN',component:UserLoginComponent},
   {path:'User-register',component:UserRegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    aboutUsComponent,
     ContactUSComponent,
     HomeComponent,
     UserLoginComponent,
     UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
     ServicesService,
    AboutUsService,
     ContactUsService,
     HomeService,
     UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
