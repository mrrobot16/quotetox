import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { QuotetoxClientAppComponent, environment } from './app/';
import 'rxjs/add/operator/toPromise';
if (environment.production) {
  enableProdMode();
}

bootstrap(QuotetoxClientAppComponent,[HTTP_PROVIDERS]);
