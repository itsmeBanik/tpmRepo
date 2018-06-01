import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { Userdetails } from './userdetails.model';
import {LoginComponent} from '../login/login.component';
import {UserStatus} from './statusDetails.model';
@Injectable()
export class UserdetailsService {
 
  
  constructor(private http: Http) { }
   getUsers(id1):Observable<Userdetails[]> {
    const head = new Headers({ "Access-Control-Allow-Origin": '*',
    "Accept": '*'})
    console.log("Hi It is fetching out here");
    console.log(this.http.get('http://localhost:8081/UserByEmail/'+id1).map(this.extractData));
    return this.http.get('http://localhost:8081/UserByEmail/'+id1).map(this.extractData);
    
    } 

    
    
  
     getAllUsers():Observable<Userdetails[]> {
       debugger;
      //alert("data is here");
       const head = new Headers({ "Access-Control-Allow-Origin": '*',
       "Accept": '*'})
       console.log("Hi This is a list of all the users");
       console.log(this.http.get('http://localhost:8081/findALLActiveUsers').map(this.extractData));
       return this.http.get('http://localhost:8081/findALLActiveUsers').map(this.extractData);
       
       }  
    private extractData(res: Response) {
      let body = <Userdetails[]>res.json();
      return body || [];
    }

    addUserDetails(newUser){
      alert(newUser);
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      console.log("Trying to insert------------",newUser);
      console.log(this.http.post('http://localhost:8081/createuser', JSON.stringify(newUser) , {headers: headers})
      .map(res=>res.json()));
      return this.http.post('http://localhost:8081/createuser', JSON.stringify(newUser) , {headers: headers})
      .map(res=>res.json());
      
    }
    deleteallUserDetails(id){
      console.log( this.http.get('http://localhost:8081/deleteUserByEmailID/'+id));
      return this.http.get('http://localhost:8081/deleteUserByEmailID/'+id)
      .map(res=>res.json);
    }

    editUserDetails(newUser){
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      console.log("Trying to insert------------",newUser);
      console.log(this.http.post('http://localhost:8081/updateUserByEmail', JSON.stringify(newUser) , {headers: headers})
      .map(res=>res.json()));
      return this.http.post('http://localhost:8081/updateUserByEmail', JSON.stringify(newUser) , {headers: headers})
      .map(res=>res.json());
      
    }
        
        }
      

