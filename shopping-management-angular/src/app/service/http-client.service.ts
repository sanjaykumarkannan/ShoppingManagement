import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../users/user';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { Product } from '../models/product';
import { Options } from '../../../node_modules/@types/selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  //for login
  private loginStatus = new BehaviorSubject<boolean>(false);
  loginStatusObservable = this.loginStatus.asObservable();



  constructor(private httpClient: HttpClient,private router:Router) { }

  getAllFiles (): Observable<Product[]> {
    return this.httpClient.post<Product[]>("http://localhost:8501/user/get/all",sessionStorage.getItem("userEmail"))
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
        
          sessionStorage.setItem('userEmail', user.userEmail);
            
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

  //Delete a single product
  deleteProduct(product:Product)
  { 
    var requestOptions: Object = {
    responseType: 'text'
  }
    console.log(product.productid);
    this.httpClient.delete<String>("http://localhost:8501/user/delete/"+product.productid,requestOptions).subscribe(
      data=>{
        console.log(data);
         //window.location.reload();
         //The below code is used to refresh a particular component alone 
         this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/viewFiles']);
      });
        
      },
      error=>{
        console.log(error);
      }

    )
  }


  private handleError(error: Response) {
    return Observable.throw(error);

  }
}
