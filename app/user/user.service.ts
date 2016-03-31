import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {User} from './user';

@Injectable()
export class UserService {

    private _url: String = '/users';
    static API_URL = {
        LOGIN: '/data/user.json',
        SIGNUP: '/data/user.json',
        FORGOT: '/data/user.json',
        RESET: '/data/user.json',
        LOGOUT: '/data/user.json',
        UPDATE: '/data/user.json',
        
        
    }  
    static API_URL1 = {
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
        FORGOT: '/user/forgot',
        RESET: '/user/reset',
        LOGOUT: '/user/logout',
        UPDATE: '/user',
        
        
    }  
    constructor(private _http: Http) { }

 
    login(email: string, password: string): Observable {
        let body = JSON.stringify({email: email, password: password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post(UserService.API_URL.LOGIN, body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    logout(){
        
    }
    signup(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post(UserService.API_URL.SIGNUP, body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    forgot(email: String) {
        let body = JSON.stringify({ email: email });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post(UserService.API_URL.FORGOT, body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    reset(token: string, newPassword: string) {
        let body = JSON.stringify({ token: token, newPassword: newPassword });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post(UserService.API_URL.RESET, body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    getUserByEmail(email: string) {
        let data = JSON.stringify({ email: email });

        return this._http.get(this._url, data)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    saveUser(user: User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions(headers);

        return this._http.post(UserService.API_URL.UPDATE, body, requestOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
