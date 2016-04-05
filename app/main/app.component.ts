import { Component, Input, provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, Router  } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import {routeDef} from './routes';

import {APP_CONFIG, Config, CONFIG} from './config';

@Component({
    selector: 'my-app',
    templateUrl: './app/main/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS,
      provide(APP_CONFIG, {useValue: CONFIG})
    ],
    styles: [".router-link-active { background-color: red; }"],
})
@RouteConfig(routeDef)
export class AppComponent {
    title = "CRUD";
    constructor(public router: Router){}
    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
    
}