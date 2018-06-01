import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {environment} from '../../environments/environment';
import { Headers } from "@angular/http";
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import { Response } from "@angular/http";
import {Observable } from 'rxjs/Observable';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {RequestOptions } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class LoginserviceService {

  constructor(private http: HttpClient) { }

  private options = {  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 6ae5104d-3e24-31fa-8d80-590a259e2d82'
  })
  

};

public login(data){


  //console.log("inside serveice",data);
  console.log(this.http.get('https://gateway-deliverydashbord.quinnox.info:8253/Deliverydash/v1.0.0',this.options));

  return this.http.post('https://gateway-deliverydashbord.quinnox.info:8253/Deliverydash/v1.0.0', data, this.options)
  

}

}
