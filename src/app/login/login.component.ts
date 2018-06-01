import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginserviceService } from '../shared/login.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService]
})
export class LoginComponent implements OnInit {
  responseData: any;
  status_invalid_credenrials: any;
  queryParam: any;
  email: any;
  password: any;
  errorMessage: string = "";
  successMessage: string = "";
  loginForm: FormGroup;

  myarray: any[];

  constructor(
    private localStorage: LocalStorage,
    private signinService: LoginserviceService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required,
      Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]),
      password: new FormControl("",
        [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
    });
  }

  login() {
    debugger;
    //console.log("--------------",this.loginForm.value);
    this.email = this.loginForm.value.email;
    
    this.password = this.loginForm.value.password;
    var data = {
      "username": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    
    this.signinService.login(data)

      .subscribe(data => {
        this.responseData  =  data,  console.log("aaaaaaaaaaaaaaaaaaaaaaa",  JSON.stringify(data))
        if (this.responseData.validation == "Success") {
          const user = {
            email : this.responseData['mail'],
            name : this.responseData['displayName'],
            title : this.responseData['title'],
            eid : this.responseData['employeeNumber']
          };
          this.localStorage.setItem('user',user).subscribe(()=> {console.log('stored');
          this.router.navigate(['dashboard']);});
          
        } else {
          debugger;
         
          this.status_invalid_credenrials =  true;
          alert("Invalid Credentials . Please provide correct username and password");

        }
      },
      (err:   HttpErrorResponse) =>  {
        if   (err.error   instanceof   Error) {  console.log('An error occurred:', err.error.message); }
        else  {

        }


      });

  }

  ngOnInit() {
    this.login();
  }
  get emailnew() {
    return this.loginForm.get('email');
  }
  get passwordnew() {
    return this.loginForm.get('password');
  }









}










