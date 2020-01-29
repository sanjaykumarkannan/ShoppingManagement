import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { HttpClientService } from '../../service/http-client.service';
import { HeaderComponent } from '../../header/header.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User=new User();
  loggedIn='';
  constructor(private httpService:HttpClientService) {
    
  }

  ngOnInit() {
  }

  login():void
  {
    console.log("Inside login 1");
    this.httpService.login(this.user);
  }
  /*
  getAllUsers():void
  {
    this.httpService.getAllUsers().subscribe(
      (userData:User[])=>
    {
      this.users=userData,
      console.log(this.users)
    },
    (error)=>{
      console.log(error)  
    } 
  )
  } */
}
