import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {UserService} from './user.service';

@Component({
    selector: 'user-profile',
    templateUrl: './app/user/user-profile.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]  
})

export class UserProfileComponent implements OnInit {
    
    vm: Object = {};
    
    constructor(private _userService: UserService) { }

    ngOnInit() { }
    
    onSubmit(){
        console.log(this.vm);
    }

}