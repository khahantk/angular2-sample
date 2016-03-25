
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
        new Customer(1, "Jenk", "jenk@gmail.com", "123 My Home"),
        new Customer(2, "Prokin", "prokin@gmail.com", "456 Address"),
        new Customer(3, "Naka", "naka@gmail.com", "111 Address")
    ];

    constructor(private http: Http) {
     }

    getCustomers() {
        return Promise.resolve(this._customers);
    }

    saveCustomer(customer: Customer) {
        if(!customer.id){
            //add new
            customer.id = CustomerService.nextId++;
            this.getCustomers().then(items => items.push(customer));   
            
        } else{
            //update
            this.getCustomers().then(items => {
                let c:Customer = items.find(function cb(element, index, array) {
                    return element.id === customer.id
                });
                c = customer;
            });   
        }
        
        return customer;
    }

    getCustomer(id: any) {
        return this.getCustomers().then(items => items.filter(c => c.id === id)[0]);
    }
    
    removeCustomer(id:any){
         this.getCustomers().then(items => {
            let idx = items.findIndex(function cb(element, index, array) {
                return element.id === id
            });
            //console.log(idx);
            items.splice(idx, 1);
        });
    }

    
}