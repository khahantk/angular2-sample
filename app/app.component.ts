import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import {routeDef} from './routes';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS
    ],
    styles: [".router-link-active { background-color: red; }"],
})
@RouteConfig(routeDef)
export class AppComponent {
    public title = "CRUD";
    constructor(public router: Router){}
    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
    
}