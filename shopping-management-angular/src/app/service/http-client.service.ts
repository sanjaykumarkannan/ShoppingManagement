import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  //for login
  private loginStatus=new BehaviorSubject<boolean>(false);
  loginStatusObservable=this.loginStatus.asObservable();



  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8501/user/get/all")
      .pipe(
        catchError(this.handleError)
      );
  }

  // login(user:User)
  // {
  //   console.log("Inside login 2");
  //   return this.httpClient.post<boolean>("http://localhost:8501/login",user);
  // }

  login(user:User)
  {
    var bool:boolean;
    (this.httpClient.post<boolean>("http://localhost:8501/login",user)).subscribe(data=>
  {
    this.loginStatus.next(data);
  },
  error=>
  {
  console.log("error whil retreving data");
});
  }

  createUser(user:User)
  {
    this.httpClient.post<string>("http://localhost:8501/user/add",user).subscribe(data=>
  {
    console.log(data);
  },error=>
  {
    console.log("Error creating user");
  }
)
  }


  private handleError(error:Response)
  {
    return Observable.throw (error);
    
  }
}
