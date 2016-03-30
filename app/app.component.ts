import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import {HomeComponent}  from './home/home.component';
import {CustomerFormComponent}  from './customer/customer-form.component';
import {CustomerComponent}  from './customer/customer.component';
import {AboutComponent}  from './about/about.component';
import {ContactComponent}  from './contact/contact.component';


import {UserRegisterComponent}  from './user/user-register.component';
import {UserLoginComponent}  from './user/user-login.component';
import {UserForgotComponent}  from './user/user-forgot.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS
    ]
})
@RouteConfig([
     {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
     {path: '/about', name: 'About', component: AboutComponent},
     {path: '/contact', name: 'Contact', component: ContactComponent},
     
     {path: '/register', name: 'UserRegister', component: UserRegisterComponent},
     {path: '/login', name: 'UserLogin', component: UserLoginComponent},
     {path: '/forgot', name: 'UserForgot', component: UserForgotComponent},
     
     {path: '/customer/...', name: 'Customer', component: CustomerComponent}
])
export class AppComponent {
    public title = "CRUD";
}