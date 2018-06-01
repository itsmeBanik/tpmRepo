import { Component, OnInit } from '@angular/core';
import { Companydetails } from '../shared/companydetails.model';
import { CompanydetailsService } from '../shared/companydetails.service';
import { HttpModule } from '@angular/http';
import { Response } from '@angular/http' ;
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import {Validators } from '@angular/forms';
import { log } from 'util';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css'],
  providers: [CompanydetailsService]
})
export class CompanydetailsComponent implements OnInit {
  companyArray: Companydetails[];
  company1: any[];
  constructor(private companydetailsService:CompanydetailsService) { 
    
  } 

  getCompanyDetails(){
    
    this.companydetailsService.getCompany()
   .subscribe(data => {
    this.companyArray = data
    console.log('MYcompany', this.companyArray);    
   });
   }
   
   getAllCompanyDetails(){
    
    this.companydetailsService.getAllCompany()
   .subscribe(data => {
    this.company1 = data
    console.log('company', this.company1);    
   });
   } 

   clear(){
    console.log("form has cleared");
  }
   addCompanyDetail(form){
     console.log(form.value);
     let newCompany:Companydetails = {
      companyID: form.value.id,
      companyName: form.value.name,
      companyNumber: form.value.number,
      companyLocation:form.value.orglocation,
      as2id:form.value.as2id,
      dunsno:form.value.dunsnumber,
      createdOn:form.value.createdon,
      updatedOn:form.value.updatedon,
      createdBy:form.value.createdby,
      updatedBy:form.value.updatedby

    }
    this.companydetailsService.addCompanyDetails(newCompany).subscribe(companydetails=>{
     this.companyArray.push(companydetails);
     
    });
   }
  
   deleteCompanyDetails(id:any){
    console.log("user deleted");
    this.companydetailsService.deleteUserDetails(id)
    .subscribe(data=>{
      console.log(data);
      if(data.length==1){
        for(var i=0;i< this.companyArray.length; i++){
          if( this.companyArray[i]._id == id){
            this.companyArray.splice(i,1);
          }
        }
      }
    });
  }
  
  ngOnInit(): void {
    this.getCompanyDetails();
    this.getAllCompanyDetails();
  }

}
