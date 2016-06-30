// Angular 2 objects
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
// Components
import {QuoteComponent} from './components/quote.component';
// Services
import {QuoteService} from './services/quote.service'

@Component({
  moduleId: module.id,
  selector: 'quotetox-client',
  template: '<quote-component></quote-component>',
  directives:[QuoteComponent],
  providers:[HTTP_PROVIDERS, QuoteService]

})
export class QuotetoxClientAppComponent {
  constructor(){

  }
}
