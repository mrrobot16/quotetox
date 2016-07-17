// Angular 2 objects
import {Component, OnInit} from '@angular/core';
import {DetoxComponent} from '../detox/detox.component';
import {QuoteComponent} from '../quote/quote.component';
// Services
import {DetoxService} from '../../services/detox.service';
// This Service handles all Quote HTTP calls to our server


@Component({
  moduleId: module.id,
  selector: 'home-screen-component',
  template: `
  <div class="nav-bar">
<!--  <a href="/">Detox Info</a>
  <a href="/">Add Quote</a> -->
  </div>
  <div class="container">
    <div class="home-screen">
    <detox-component></detox-component>
    <quote-component></quote-component>
    </div>
  </div>
  `,
  styleUrls: ['home-screen.css'],
  providers:[DetoxService],
  directives:[QuoteComponent, DetoxComponent]
})
export class HomeScreenComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){
  }


}
