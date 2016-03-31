import { Component, OnInit } from 'angular2/core';
import {UserService} from './user.service';

@Component({
    selector: 'user-register',
    templateUrl: './app/user/user-register.component.html',
    providers: [UserService] 
})

export class UserRegisterComponent implements OnInit {
    
    vm: Object = {};
    
    constructor(private _userService: UserService) { }

    ngOnInit() { }
    
    onSubmit(){
        console.log(this.vm);
    }

}