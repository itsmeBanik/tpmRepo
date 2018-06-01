import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Companydetails } from './companydetails.model';
@Injectable()
export class CompanydetailsService {
 
  constructor(private http: Http) { }
  getCompany():Observable<Companydetails[]> {
    const head = new Headers({ "Access-Control-Allow-Origin": '*',
    "Accept": '*'})
    console.log("Hi It is fetching my compnay details out here");
    console.log(this.http.get('http://localhost:8081/CompanyByCNo/').map(this.extractData));
    return this.http.get('http://localhost:8081/CompanyByCNo/').map(this.extractData);
    
    }

    getAllCompany():Observable<any[]> {
      const head = new Headers({ "Access-Control-Allow-Origin": '*',
      "Accept": '*'})
      console.log("Hi It is fetching my compnay details out here");
      console.log(this.http.get('http://localhost:8081/companyFindALL/').map(this.extractData));
      return this.http.get('http://localhost:8081/companyFindALL/').map(this.extractData);
      
      }
     
    private extractData(res: Response) {
      let body = <any[]>res.json();
      return body || [];
    }

    addCompanyDetails(newCompany){
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      return this.http.post('http://localhost:8081/orgDetails/create', newCompany , {headers: headers})
      .map(res=>res.json());
    }

    deleteUserDetails(id){
      return this.http.delete('http://localhost:8081/orgDetails/delete/'+id)
      .map(res=>res.json);
    }
    
        }
      

