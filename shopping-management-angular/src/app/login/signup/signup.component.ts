import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { HttpClientService } from '../../service/http-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  constructor(private httpService:HttpClientService) { }

  ngOnInit() {
  }

  createUser()
  {
    this.httpService.createUser(this.user);
  }
}
