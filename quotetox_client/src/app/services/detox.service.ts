// Angular 2 objects
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
// Models
import {Detox} from '../models/detox.model'

@Injectable()

export class DetoxService {
    detoxes:any
    constructor(private http: Http) {

    }

    get_detox():Promise<any>{
      return this.get();
    }

    post_detox(){

    }

    update_detox(){

    }

    delete_detox(){

    }

    private get():Promise<any>{
      this.detoxes = this.http.get('detoxes')
          .toPromise()
          .then((res)=>{
            return res.json();
          });
      return this.detoxes;
    }

    private post(){

    }

    private put(){

    }

    private delete(){

    }

}
