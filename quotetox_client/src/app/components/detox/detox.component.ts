// Angular 2 objects
import {Component, OnInit} from '@angular/core';
// Models
import {Detox} from '../../models/detox.model';
// Services
import {DetoxService} from '../../services/detox.service';

@Component({
  moduleId: module.id,
  selector: 'detox-component',
  template: `
    <p>Days Alcohol Free: {{detox.tox_free}}</p>
  `,
  styleUrls: ['detox.css'],
  providers:[]
})
export class DetoxComponent implements OnInit {
  public detox: Detox;
  public today:any;
  constructor(){
  }

  ngOnInit(){
    this.detox = new Detox();
    this.today = new Date();
    this.detox.drug_name = "Alcohol";
    this.detox.last_time = new Date(2016,0,17);
    this.detox.tox_free = Math.floor(((this.today - this.detox.last_time)/(864*Math.pow(10,5))));
  }
  getDetox(){

  }
}
