import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './main/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';


bootstrap(AppComponent, [ROUTER_PROVIDERS])
    .then(success => console.log(`Bootstrap success`));
