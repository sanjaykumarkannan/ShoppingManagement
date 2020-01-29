import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  signup_comp:boolean;
  signin_comp:boolean;
  constructor() {
    console.log("Login COmponent");
    this.signup_comp=true;
    this.signin_comp=false;
   }

  ngOnInit() {
  }

  signup()
  {
    console.log("working");
    this.signup_comp=true;
    this.signin_comp=false;
  }
  signin()
  {
    this.signup_comp=false;
    this.signin_comp=true;
  }
}
