import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  loggedIn:boolean =false;
  constructor(private httpsService:HttpClientService) { }


  ngOnInit() {
    this.httpsService.loginStatusObservable.subscribe((data)=>
  {
    this.loggedIn=data;
  },
(error)=>
{
  console.log("Error while logging in");
})
  }

}
