import { Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  logOut() {
    sessionStorage.removeItem('username')
    this.router.navigate(['login/signin']);
    }
}
