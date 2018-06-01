import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})
export class TopnavigationComponent implements OnInit {

  constructor(private localStorage: LocalStorage, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.localStorage.clear().subscribe(()=>this.router.navigate(['login']));

  }

}
