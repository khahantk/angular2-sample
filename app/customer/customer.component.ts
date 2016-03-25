import { Component, OnInit } from 'angular2/core';
import {RouteConfig,RouterOutlet, RouterLink, Router,   ROUTER_DIRECTIVES, CanActivate, OnActivate, ComponentInstruction} from 'angular2/router';

import {CustomerFormComponent}  from './customer-form.component';
import {CustomerListComponent}  from './customer-list.component';
import {CustomerService}  from './customer.service';

@Component({
    selector: 'customers',
    templateUrl: './app/customer/customer.component.html',
    directives: [RouterOutlet, RouterLink],
    providers: [CustomerService]
})
@RouteConfig([
    { path: '/list', name: 'HomeCustomer', component: CustomerListComponent, useAsDefault: true },
    { path: '/add', name: 'AddCustomer', component: CustomerFormComponent },
    { path: '/edit/:id', name: 'EditCustomer', component: CustomerFormComponent },
])
export class CustomerComponent implements OnInit {
    
    constructor(private _router: Router ) { }

    ngOnInit() { }
    
    gotoAdd(){
        this._router.navigate(['AddCustomer']);
    }

}