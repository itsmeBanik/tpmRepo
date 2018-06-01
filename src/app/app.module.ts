
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApproutingRoutingModule } from './approuting/approuting-routing-module';
import { ApproutingModule } from './approuting/approuting-module';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import {LoginserviceService} from './shared/login.service';
import {UserdetailsService} from './shared/userdetails.service';

import {MenuModule , MenubarModule} from 'primeng/primeng';
import { LocalStorageModule } from '@ngx-pwa/local-storage';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataTableModule ,ChartModule, CalendarModule, SharedModule} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PaginatorModule} from 'primeng/paginator';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import { TopnavigationComponent } from './navigation/topnavigation/topnavigation.component';
import { SidenavigationComponent } from './navigation/sidenavigation/sidenavigation.component';
import { MainDashboardComponent } from './dashboard/components/main-dashboard/main-dashboard.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AuthGuard } from './shared/services/auth.guard';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserstatusService } from './shared/userstatus.service';
import { RoledetailsService } from './shared/roledetails.service';
import { CompanydetailsService } from './shared/companydetails.service';





@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    CompanydetailsComponent,
    LoginComponent,
    DashboardComponent,
    TopnavigationComponent,
    SidenavigationComponent,
    MainDashboardComponent,
    AppFooterComponent

    
    
  ],
  imports: [
    CardModule,
    CheckboxModule,
    PaginatorModule,
    ChartModule,
    CalendarModule,
    SharedModule,
    AccordionModule,
    ApproutingRoutingModule,
    ApproutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
    HttpModule,
    HttpClientModule,
    MenuModule,
    MenubarModule,
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataTableModule,
    AngularFontAwesomeModule,
    TableModule,
    DataViewModule,
    DialogModule,
    ScrollPanelModule,
    LocalStorageModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    CodeHighlighterModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot()
    
  ],
  
  providers: [
    UserdetailsService,
    AuthGuard,
    MessageService,
    UserstatusService,
    RoledetailsService,
    CompanydetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
