// Angular 2 objects
import {Component, OnInit} from '@angular/core';
import {QuoteComponent} from '../quote/quote.component';
// Services
// This Service handles all Quote HTTP calls to our server


@Component({
  moduleId: module.id,
  selector: 'home-screen-component',
  template: `
  <div class="container">
    <detox-component></detox-component>
    <quote-component></quote-component>
  </div>
  `,
  styleUrls: ['home-screen.css'],
  providers:[],
  directives:[QuoteComponent]
})
export class HomeScreenComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){
  }


}