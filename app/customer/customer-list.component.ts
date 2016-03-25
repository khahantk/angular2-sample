import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import {RouteConfig, RouterOutlet, RouterLink, Router, ROUTER_PROVIDERS,  ROUTER_DIRECTIVES} from 'angular2/router';


import { Customer }    from './customer';
import { CustomerService }    from './customer.service';

@Component({
    selector: 'customer-list',
    templateUrl: '/app/customer/customer-list.component.html',
    directives: [ROUTER_DIRECTIVES]
   
})
export class CustomerListComponent implements OnInit {

    public customers: Customer[] = [];
    public selectedCustomer: Customer;
    
    constructor(private _service:CustomerService, private _router: Router){
        
    }

    ngOnInit() {
        this.getCustomers();
    }

    onSelect(customer: Customer) {
        this.selectedCustomer = customer;
        this._router.navigate(['EditCustomer', {id: customer.id}]);
    }
    onDelete(customer:Customer){
        this.selectedCustomer = customer;
        if(window.confirm("Are you sure want to delete this item ?")){
            this._service.removeCustomer(customer.id);
        }
        
    }
     gotoAdd(){
        this._router.navigate(['AddCustomer']);
    }

    getCustomers() {
        this._service.getCustomers().then(customers=>this.customers = customers);
       
    }

}
