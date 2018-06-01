import { Injectable } from '@angular/core';
import {RoleDetails} from '../shared/roleDetails.model';
import {Observable} from "rxjs";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoledetailsService {

  constructor(private http: Http) { }
  getUserRole():Observable<any[]> {
    debugger;
    
     const head = new Headers({ "Access-Control-Allow-Origin": '*',
     "Accept": '*'})
     console.log("Hi This is a list of all the users");
     console.log(this.http.get('http://localhost:8081/roleDetails').map(this.extractData));

     return this.http.get('http://localhost:8081/roleDetails').map(this.extractData);
     
     } 
   private extractData(res: Response) {
     debugger;
     let body = <any[]>res.json();
     console.log(body);
     return body || [];
   }

}
