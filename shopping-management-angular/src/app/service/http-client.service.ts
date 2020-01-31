import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../users/user';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  //for login
  private loginStatus = new BehaviorSubject<boolean>(false);
  loginStatusObservable = this.loginStatus.asObservable();



  constructor(private httpClient: HttpClient,private router:Router) { }

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

  login(user: User) {
    var bool: boolean;
    (this.httpClient.post<boolean>("http://localhost:8501/login", user)).subscribe(data => {
      this.loginStatus.next(data);
      
      if(data==true)
      {
        console.log(data);
        
          sessionStorage.setItem('username', user.userEmail);
          this.router.navigate(['upload']);
      }
      else{
        console.log("Validation failed");
      }
    },
      error => { 
        console.log("error whil retreving data");
      });
  } 

  createUser(user: User) {
    var requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    this.httpClient.post<string>("http://localhost:8501/user/add", user, requestOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
      );
  }


  private handleError(error: Response) {
    return Observable.throw(error);

  }
}
