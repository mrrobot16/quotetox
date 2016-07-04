// Angular 2 objects
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
// Models
import {Quote} from '../models/quote.model'

@Injectable()

export class QuoteService {
  public quote_end: string;
  public quotes: any;
    constructor(private http: Http) {
      this.quote_end = "quotes";

    }

    get_quotes():Promise<any>{
      return this.get();
    }

    post_quote(){

    }

    update_quote(){

    }

    delete_quote(){

    }

    private get():Promise<any>{
      this.quotes = this.http.get(this.quote_end)
          .toPromise()
          .then((res) => {
            return res.json();
          });
          return this.quotes;
    }

    private post(){

    }

    private put(){

    }

    private delete(){

    }

}
