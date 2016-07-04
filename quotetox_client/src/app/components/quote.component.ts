// Angular 2 objects
import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
// Models
// import {Quote} from '../models/quote.model';

// Services
// This Service handles all Quote HTTP calls to our server
import {QuoteService} from '../services/quote.service';

@Component({
  moduleId: module.id,
  selector: 'quote-component',
  templateUrl: 'quote.component.html',
  styleUrls: ['quote.component.css'],
  providers:[HTTP_PROVIDERS, QuoteService]
})
export class QuoteComponent implements OnInit {
  public today: any;
  public last_drink: any;
  public alcohol_free_days: number;
  public quotes: any;
  public quote: any;
  constructor(private quote_service: QuoteService){

  }

  ngOnInit(){
    this.today = new Date();
    this.last_drink = new Date(2016,0,17);
    this.alcohol_free_days = Math.floor(((this.today - this.last_drink)/(864*Math.pow(10,5))));
    this.get_quotes();
  }

  get_quotes():Promise<any>{
    var quote = this.quote_service.get_quote();
    return quote.then(
      (quotes) => {
        this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote
      }
    )
  }


}
