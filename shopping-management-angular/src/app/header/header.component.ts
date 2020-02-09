import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  loggedIn:boolean =false;
  constructor(private httpsService:HttpClientService,private loginStatus:AuthenticationService) { }


  ngOnInit() {
    //Behaviour subject code
    /* this.httpsService.loginStatusObservable.subscribe((data)=>
  {
    this.loggedIn=data;
  },
(error)=>
{
  console.log("Error while logging in");
}) */
  };
//loginStatus.isUserLoggedIn
  logout()
  {
    this.loggedIn=false;
    this.loginStatus.logOut();
  }

}
