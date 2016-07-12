// Angular 2 objects
import {Component, OnInit} from '@angular/core';
// Models
import {Quote} from '../models/quote.model';
import {Detox} from '../models/detox.model';

// Services
// This Service handles all Quote HTTP calls to our server
import {QuoteService} from '../services/quote.service';

@Component({
  moduleId: module.id,
  selector: 'quote-component',
  templateUrl: 'quote.component.html',
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
    this.detox = new Detox();
    this.today = new Date();
    this.detox.drug_name = "Alcohol"
    this.detox.last_time = new Date(2016,0,17)
    this.detox.tox_free_days = Math.floor(((this.today - this.detox.last_time)/(864*Math.pow(10,5))))
    this.get_quotes();
  }

  get_quotes():Promise<any>{
    var quote = this.quote_service.get_quotes();
    return quote.then(
      (quotes) => {
        this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote
      }
    )
  }


}
