import {HomeComponent}  from './home/home.component';
import {CustomerFormComponent}  from './customer/customer-form.component';
import {CustomerComponent}  from './customer/customer.component';
import {AboutComponent}  from './about/about.component';
import {ContactComponent}  from './contact/contact.component';


import {UserRegisterComponent}  from './user/user-register.component';
import {UserLoginComponent}  from './user/user-login.component';
import {UserForgotComponent}  from './user/user-forgot.component';

export let routeDef: any[] = [
     {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
     {path: '/about', name: 'About', component: AboutComponent},
     {path: '/contact', name: 'Contact', component: ContactComponent},
     
     {path: '/register', name: 'UserRegister', component: UserRegisterComponent},
     {path: '/login', name: 'UserLogin', component: UserLoginComponent},
     {path: '/forgot', name: 'UserForgot', component: UserForgotComponent},
     
     {path: '/customer/...', name: 'Customer', component: CustomerComponent}
]; 
