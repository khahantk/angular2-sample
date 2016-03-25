import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { Customer }    from './customer';
import { CustomerService }    from './customer.service';

@Component({
    selector: 'customer-list',
    templateUrl: '/app/customer/customer-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})
export class CustomerListComponent implements OnInit {

    public customers: Customer[] = [];
    public selectedCustomer: Customer;
    
    constructor(private _router: Router, private _service:CustomerService){
        
    }

    ngOnInit() {
        this.getCustomers();
    }

    onSelect(customer: Customer) {
        this.selectedCustomer = customer;
        this._router.navigate(['EditCustomer', {id: customer.id}]);
    }
     gotoAdd(){
        this._router.navigate(['AddCustomer']);
    }

    getCustomers() {
        this._service.getCustomers().then(customers=>this.customers = customers);
       
    }

}
