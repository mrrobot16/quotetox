// Angular 2 objects
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

// Components
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
// Services
import {QuoteService} from './services/quote.service'

@Component({
  moduleId: module.id,
  selector: 'quotetox-client',
  template: '<home-screen-component></home-screen-component>',
  directives:[HomeScreenComponent],
  providers:[QuoteService, HTTP_PROVIDERS]

})
export class QuotetoxClientAppComponent {
  constructor(){
  }
}
