import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  constructor(private httpService:HttpClientService) { }

  ngOnInit() {
    this.getAllUsers();
  }

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
  }

}
