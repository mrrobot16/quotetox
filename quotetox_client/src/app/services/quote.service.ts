// Angular 2 objects
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()

export class QuoteService {
  constructor(private http: Http) {
  }
}
