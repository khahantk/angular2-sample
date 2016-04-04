import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Contact} from './contact';

@Injectable()
export class ContactService {
    
    constructor(private _http: Http){
    }
    send(contact: Contact): Observable{
        let body = JSON.stringify({name: contact.name, email: contact.email, message: contact.message});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post('/contact', body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}