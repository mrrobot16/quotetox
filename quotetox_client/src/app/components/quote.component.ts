// Angular 2 objects
import {Component, OnInit} from '@angular/core';

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
  providers:[QuoteService]
})
export class QuoteComponent implements OnInit {
  public today: any;
  public last_drink: any;
  public alcohol_free_days: number;
  public quotes: any;
  public quote: string;
  constructor(private quote_service: QuoteService){

  }

  ngOnInit(){
    this.today = new Date();
    this.last_drink = new Date(2016,0,17);
    this.alcohol_free_days = Math.floor(((this.today - this.last_drink)/(864*Math.pow(10,5))));
    this.quote = this.quote_service.get_quotes_dict();
  }

  get_quotes(){
    this.quote = this.quote_service.get_quotes_dict();
  }


}
