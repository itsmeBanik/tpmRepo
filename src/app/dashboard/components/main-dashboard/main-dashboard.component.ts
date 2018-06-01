import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor(private router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  displayUserList() {
    this.router.navigate(['userdetails'],{relativeTo: this.activatedRoute});
  }

  displayCompanyList() {
    this.router.navigate(['companydetails'],{relativeTo: this.activatedRoute});
  
  }


}
