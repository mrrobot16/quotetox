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
    <p>Days {{detox.drug_name}} Free: {{detox.tox_free}}</p>
  <!--  <p>Remember why you want this number to go up</p> -->
    <!--  <button (click)="get_detox()">Remember Why</button> -->
  `,
  styleUrls: ['detox.css'],
  providers:[]
})
export class DetoxComponent implements OnInit {
  public detoxes: any;
  public detox:any
  public today: any;
  constructor(private detox_service: DetoxService){
  }

  ngOnInit(){
    this.detox = new Detox();
    this.today = new Date();
    this.get_detox();
  }

  get_detox(): Promise<any>{
    var detoxes:any = this.detox_service.get_detox();
    return detoxes.then(detox => {
      this.detoxes = detox;
      var last_time =this.detoxes[this.detoxes.length-1].last_time.split('-');
      this.detox.drug_name = this.detoxes[this.detoxes.length-1].drug_name;
      this.detox.last_time = new Date(last_time[0],last_time[1]-1,last_time[2]);
      this.detox.tox_free = Math.floor(((this.today - this.detox.last_time)/(864*Math.pow(10,5))));
    });
  }



}
