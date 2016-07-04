// Angular 2 objects
import {Component} from '@angular/core';
// Components
import {QuoteComponent} from './components/quote.component';
// Services
import {QuoteService} from './services/quote.service'

@Component({
  moduleId: module.id,
  selector: 'quotetox-client',
  template: '<quote-component></quote-component>',
  directives:[QuoteComponent],
  providers:[QuoteService]

})
export class QuotetoxClientAppComponent {
  constructor(){

  }
}
