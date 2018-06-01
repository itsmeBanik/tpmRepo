import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { CompanydetailsComponent } from '../companydetails/companydetails.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../dashboard/components/main-dashboard/main-dashboard.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    canActivate: [AuthGuard],
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: MainDashboardComponent, pathMatch: 'full' },
      { path: 'userdetails', component: UserdetailsComponent },
      { path: 'companydetails', component: CompanydetailsComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingRoutingModule { }


