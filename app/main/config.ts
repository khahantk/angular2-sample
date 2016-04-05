import {OpaqueToken} from 'angular2/core';

export interface Config {
  apiEndpoint: string,
  title: string
}

export const CONFIG:Config = {
  apiEndpoint: 'api.heroes.com',
  title: 'Angular 2 Sample'
};

export let APP_CONFIG = new OpaqueToken('app.config');
