import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router,) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userEmail');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userEmail');
    this.router.navigate(['login/signin']);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
      if (this.isUserLoggedIn())
        return true;

      this.router.navigate(['login']);
      return false;
  }
}