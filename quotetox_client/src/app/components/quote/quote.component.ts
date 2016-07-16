// Angular 2 objects
import {Component, OnInit} from '@angular/core';
// Models
import {Quote} from '../../models/quote.model';
import {Detox} from '../../models/detox.model';

// Services
// This Service handles all Quote HTTP calls to our rails server
import {QuoteService} from '../../services/quote.service';

@Component({
  moduleId: module.id,
  selector: 'quote-component',
  template: `
      <p>Quote of the day:</p>
      <p>{{quote}}</p>
      <button class="quote-btn" (click)="get_quotes()">Get Quote</button>
  `,
  styleUrls: ['quote.component.css'],
  providers:[QuoteService]
})
export class QuoteComponent implements OnInit {
  public quotes: Quote[];
  public quote: Quote;
  public detox: Detox;
  public today:any;
  constructor(private quote_service: QuoteService){

  }

  ngOnInit(){
    this.get_quotes();
  }

  get_quotes():Promise<any>{
    var quote:any = this.quote_service.get_quotes();
    return quote.then(quotes => this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote);
  }


}
