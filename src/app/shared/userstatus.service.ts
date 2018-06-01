import { Injectable } from '@angular/core';
import {UserStatus} from '../shared/statusDetails.model';
import {Observable} from "rxjs";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserstatusService {

  constructor(private http: Http) { }
  getUserStatus():Observable<any[]> {
    alert("data is here");
     const head = new Headers({ "Access-Control-Allow-Origin": '*',
     "Accept": '*'})
     console.log("Hi This is a list of all the status array in the service");
     console.log(this.http.get('http://localhost:8081/findALLStatus').map(this.extractData));
     return this.http.get('http://localhost:8081/findALLStatus').map(this.extractData);
     
     } 
     private extractData(res: Response) {
      let body = <any[]>res.json();
      return body || [];
    }

}
