// Angular 2 objects
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {QuoteDictService} from './quotes-dict.service';
@Injectable()

export class QuoteService {
  public quotes: Array<any>;
  public quote: string;

    constructor(private http: Http, private quote_dict:QuoteDictService) {

    }


    get_quotes_dict(){
      this.quotes = this.quote_dict.get_quotes();
      this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)].quote
      return this.quote
    }

    get_quote(){

    }

    postQuote(){

    }

    updateQuote(){

    }

    deleteQuote(){

    }

    private get(){

    }

    private post(){

    }

    private put(){

    }

    private delete(){

    }

}
