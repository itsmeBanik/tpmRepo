import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { Userdetails } from './userdetails.model';
@Injectable()
export class UserlistService {
 
  
  constructor(private http: Http) { }
   getAllUsers():Observable<UserlistService[]> {
     alert("data is here");
      const head = new Headers({ "Access-Control-Allow-Origin": '*',
      "Accept": '*'})
      console.log("Hi This is a list of all the users");
      console.log(this.http.get('http://localhost:8081/findALLActiveUsers').map(this.extractData));
      return this.http.get('http://localhost:8081/findALLActiveUsers').map(this.extractData);
      
      } 
    private extractData(res: Response) {
      let body = <UserlistService[]>res.json();
      return body || [];
    }

    
        }
      

