import { Component, OnInit } from 'angular2/core';
import {UserService} from './user.service';
import {EmailValidator} from './email.validator';

@Component({
    selector: 'user-forgot',
    templateUrl: './app/user/user-forgot.component.html',
    directives: [EmailValidator],
    providers: [UserService]
})

export class UserForgotComponent implements OnInit {
    
    vm: Object = {};
    constructor(private _userService: UserService) { }

    ngOnInit() { }
    
    onSubmit(){
        console.log(this.vm);
        //this._userService.forgot(this.email).subscribe(res=>console.log(res));
    }

}