import {Component, OnInit, Inject} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router } from 'angular2/router';

import { Customer}    from './customer';
import { CustomerService }    from './customer.service';

@Component({
    selector: 'customer-form',
    templateUrl: '/app/customer/customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {

    public model: Customer;
    public username: number = this._routeParams.params ? this._routeParams.params.id : undefined;

    public submitted: boolean = false;
    public active: boolean = true;
    
    constructor(private _router: Router, private _routeParams: RouteParams, private _customerService: CustomerService){
        
    }

    ngOnInit() {
        let id:number = this._routeParams.get('id');
        if(id){
            this._customerService.getCustomer(id).then(customer=>this.model=customer);    
        }else{
            this.model = new Customer(0, '', '');
        }
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onSubmit() {
        this.submitted = true;
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this.save();
        this.gotoList();
    }
    
    save() {
        this._customerService.saveCustomer(this.model);
    }
    cancel() {
        this.gotoList();
    }
    gotoList(){
        this._router.navigate(['HomeCustomer']);
    }

}
