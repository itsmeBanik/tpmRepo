import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../shared/userdetails.model';
import { UserdetailsService } from '../shared/userdetails.service';
import { HttpModule } from '@angular/http';
import { Response } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserlistService } from '../shared/userlist.service';
import { log } from 'util';
import { MenuItem } from 'primeng/components/common/api';
import { MenuModule, MenubarModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { TopnavigationComponent } from '../navigation/topnavigation/topnavigation.component';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { window } from 'rxjs/operators/window';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RoledetailsService } from '../shared/roledetails.service';
import { UserstatusService } from '../shared/userstatus.service';
import { CompanydetailsService } from '../shared/companydetails.service';
import {RoleDetails} from '../shared/roleDetails.model';
import {UserStatus} from '../shared/statusDetails.model';
import {Companydetails} from '../shared/companydetails.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserdetailsService, UserlistService, MessageService,RoledetailsService,UserstatusService,CompanydetailsService]
})
export class UserdetailsComponent implements OnInit {
  getCompanyDetails(){  
    this.companyDetailsService.getAllCompany()
    .subscribe(data => {
      debugger;
      console.log(data);
      this.companyDetails=data;
      console.log(this.companyDetails);
    }); 
}  
  getAllStatus(){  
    debugger;
    this.userStatusService.getUserStatus()
    .subscribe(data => {
      debugger;
      console.log(data);
      this.status=data;
      console.log("status array is&&&&&&",this.status);
    });
      
} 

  getRoleDetails(){  
    debugger;
    console.log("Claling yooooo");
    this.roleDetailsService.getUserRole()
    .subscribe(data =>{
      console.log("I am printing debuuuuuuu",data);
        debugger;
      this.roles=data;
      
    }); 
//console.log("YOYO",this.roles[0].role);
}  

errorMessage: string;  
roles: any[];
public status: UserStatus[];  
public companyDetails: Companydetails[]; 
sampleform: FormGroup;
  newUser1: any;
  msgs: Message[] = [];
  userArray: Userdetails[];
  userArray1: Userdetails[]=[];
  users: Userdetails[];
  userDet: {};
  displayDialogSelect: any;
  displayDialogEdit: any;
  selectedUser: any;
  display: boolean;
  formDisplay: boolean;
  cols: any[];
  es: any;
  dt: any;
  date2: Date;
  
  date3: Date;

  date4: Date;

  date5: Date;

  date6: Date;

  date7: Date;

  date8: Date;

  date9: Date;

  date10: Date;

  date11: Date;

  dates: Date[];

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  tr: any;

  invalidDates: Array<Date>;

  alerts: any[] = [{

  }];

  add(): void {
    console.log("----------alert working");
    this.alerts.push({
      type: 'success',
      msg: `New user has been added successfully. (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });

  }

  edit(): void {
    console.log("----------alert working");
    this.alerts.push({
      type: 'success',
      msg: `Details has been edited successfully. (Edited: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });

  }

  delete(): void {
    console.log("---------- delete alert working");
    this.alerts.push({
      type: 'success',
      msg: `User has been deleted successfully. (removed: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });

  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  constructor(private userdetailsService: UserdetailsService, private messageService: MessageService, private router: Router, public activatedRoute: ActivatedRoute, private roleDetailsService: RoledetailsService,private userStatusService: UserstatusService,private companyDetailsService: CompanydetailsService) { }
  onGetDetails($event, user) {
    debugger;
    console.log("This is where i am clicking edit button",user);
    this.userdetailsService.getUsers(user.emailID)
      .subscribe(data => {
        this.userArray = user;
        console.log(this.userArray);
        console.log("done");
      }
      );
    console.log("%%%%%%%%%%%%%%----",JSON.stringify(this.userArray));
    this.selectedUser = user;
    console.log(this.selectedUser);
    this.date3= new Date(this.selectedUser.createdOn);
    this.date4= new Date(this.selectedUser.userValidTill);
    this.date5= new Date(this.selectedUser.userValidFrom);
    this.date6= new Date(this.selectedUser.updatedOn);
    this.selectedUser.role=this.selectedUser.role.role;
    this.selectedUser.userGroup=this.selectedUser.userGroup.groupName;
    this.selectedUser.userStatus=this.selectedUser.userStatus.status;
    //user = user[0];
    this.displayDialogEdit = true;
    let newUser = {
      changePasswordAfter: user.changepasswordafter,
      createdBy: user.createdby,
      createdOn: user.createdon,
      emailID: user.email,
      inValidLoginAttempts: user.invalidloginattempts,
      loginName: user.loginname,
      password: user.password,
      role: user.role,
      updatedBy: user.updatedby,
      updatedOn: user.updatedon,
      userGroup: user.usergroup,
      userName: user.username,
      userStatus: user.userStatus.status,
      userValidFrom: new Date(user.userValidFrom),
      userValidTill: user.uservalidtill,
      rowsPerPage: user.rowsperpage,
      loginCompanyID: user.logincompany

    }

    event.preventDefault();
    console.log("I am prininng dhikchikkkkk",newUser);
    //this.editSelectedUser(newUser);



  }

  onGetAllUsers() {
    this.userdetailsService.getAllUsers()
      .subscribe(data => {
        console.log("=============", data);
        this.users = data;
        console.log("data is---------------", this.users);
        this.cols = [
          { field: 'userID', header: 'User ID' },
          { field: 'userName', header: 'User Name' },
          { field: 'emailID', header: 'Email ID' },
          { field: 'changePasswordAfter', header: 'Change password after' },
          { field: 'userStatus.status', header: 'User Status' },
          { field: 'userGroup.groupName', header: 'User Group' },
          { field: 'createdBy', header: 'Created By' },
          { field: 'loginName', header: 'Login Name' },
          { field: 'updatedBy', header: 'Updated By' },
          { field: 'role.role', header: 'Role' },
          { field: 'company.companyName', header: 'Company Name' },
        ];
      });
  }



  clear() {
    console.log("form has cleared");
  }
  addUserDetail(form) {
    console.log("this is my  form value",form.value);
    debugger;
    this.date3=new Date();
    this.date4=new Date();
    this.date5=new Date();
    this.date6=new Date();
    console.log(form.value);
    let newUser: Userdetails = {
      changePasswordAfter: form.value.changepasswordafter,
      createdBy: form.value.createdby,
      createdOn: form.value.createdon,
      emailID: form.value.email,
      inValidLoginAttempts: form.value.inValidloginAttempts,
      loginName: form.value.loginname,
      password: form.value.password,
      role: form.value.role,
      updatedBy: form.value.updatedby,
      updatedOn: form.value.updatedon,
      userGroup: form.value.usergroup,
      userName: form.value.username,
      userStatus: form.value.userstatus,
      userValidFrom: form.value.uservalidfrom,
      userValidTill: form.value.uservalidtill,
      rowsPerPage: form.value.rowsperpage,
      loginCompanyID: form.value.logincompany

    }
    this.userdetailsService.addUserDetails(newUser).subscribe((response) => console.log("data has inserted",response),
      userdetails => {
        this.userArray.push(userdetails);

      });

   // alert("-------------------");

    this.add();
    location.reload();

  }





  ngOnInit(): void {

    //this.onGetDetails();
    /* this.onGetAllUsersDetails(); */
 /*    this.getRoleDetails();
    this.getAllStatus();
    this.getCompanyDetails(); */
    this.onGetAllUsers();

    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
    this.tr = {
      firstDayOfWeek: 1
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

  }


  selectUser(event: Event, user: any) {
    this.selectedUser = user;
    this.displayDialogSelect = true;
    event.preventDefault();
  }

  editSelectedUser(form) {
    
    this.date3=new Date(form.createdOn);
    this.date4=new Date(form.userValidTill);
    this.date5=new Date(form.userValidFrom);
    this.date6=new Date(form.updatedOn);
   /*  this.selectedUser.role=this.selectedUser.role.role;
    this.selectedUser.userGroup=this.selectedUser.userGroup.groupName;
    this.selectedUser.userStatus=this.selectedUser.userStatus.status; */
    console.log(form.value);
    let newUser: Userdetails = {
      changePasswordAfter: form.value.changePasswordAfter,
      createdBy: form.value.createdBy,
      createdOn: form.value.createdOn,
      emailID: form.value.emailID,
      inValidLoginAttempts: form.value.inValidLoginAttempts,
      loginName: form.value.loginName,
      password: form.value.password,
      role: form.value.role,
      updatedBy: form.value.updatedBy,
      updatedOn: form.value.updatedOn,
      userGroup: form.value.userGroup,
      userName: form.value.userName,
      userStatus: form.value.userStatus,
      userValidFrom: form.value.userValidFrom,
      userValidTill: form.value.userValidTill,
      rowsPerPage: form.value.rowsPerPage,
      loginCompanyID: form.value.logincompany

    }
    console.log("i want to print my email----",newUser);
    this.userdetailsService.editUserDetails(newUser).subscribe((response) => console.log(response),
      userdetails => {
        console.log("hi i am printing user edit function--------")
        this.userArray1.push(userdetails);
        console.log("this is my edit array---------",this.userArray1);

      });
      this.edit();
      location.reload();
  }

  
  onDialogHide() {
    this.selectedUser = null;
  }

  addUserDetailShowForm() {
    this.formDisplay = true;
    event.preventDefault();
    this.getRoleDetails();
    this.getAllStatus();
    this.getCompanyDetails();
  }

  onCloseForm() {
    this.formDisplay = null;
  }

  deleteSelectedUser(event: Event, user: any) {
    console.log("user deleted");
    this.userdetailsService.deleteallUserDetails(user.emailID)
      .subscribe(data => {
        console.log(data);
        if (data.length == 1) {
          for (var i = 0; i < this.userArray.length; i++) {
            if (this.userArray[i].emailID == user.emailID) {
              this.userArray.splice(i, 1);
            }
          }
        }
      });
    console.log("user has been deleted");
    alert(`User has been deleted successfully. (removed at: ${new Date().toLocaleTimeString()})`);
    location.reload();
  }

  }
