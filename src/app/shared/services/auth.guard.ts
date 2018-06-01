import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private localStorage: LocalStorage, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.localStorage.getItem('user')
    .take(1)
    .map(u=>!!u)
    .do(user => {
      if(!user) {
        this.router.navigate(['login']);
      } else {
        console.log('access denied');
      }
    })
    
  }
}
