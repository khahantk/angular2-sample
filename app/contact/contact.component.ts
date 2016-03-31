import { Component, OnInit } from 'angular2/core';
import {ContactService} from './contact.service';

@Component({
    selector: 'contact',
    templateUrl: './app/contact/contact.component.html',
    providers: [ContactService] 
})
export class ContactComponent implements OnInit {
    
    vm: Object = {};
    
    constructor(_contactService: ContactService) { }

    ngOnInit() { }
    
    onSubmit(){
        console.log(this.vm);
    }

}