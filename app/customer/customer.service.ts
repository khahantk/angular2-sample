
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Customer}           from './customer';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CustomerService {

    static nextId = 100;


    /*
    private _customerUrl = 'app/customers.json'; // URL to JSON file
    */
    private _customerUrl = 'app/customers';  // URL to web api

    private _customers: Customer[] = [
        new Customer(1, "Chung", "normal", "10"),
        new Customer(2, "Phuoc", "normal", "10"),
        new Customer(3, "Toto", "normal", "10"),
    ];

    constructor(private http: Http) { }

    getCustomers() {
        return Promise.resolve(this._customers);

    }

    saveCustomer(customer: Customer) {
        if(!customer.id){
            customer.id = CustomerService.nextId++;
        } 
        this.getCustomers().then(items => items.push(customer));   
        return customer;
    }

    getCustomer(id: any) {
        return this.getCustomers().then(items => items.filter(c => c.id == id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}