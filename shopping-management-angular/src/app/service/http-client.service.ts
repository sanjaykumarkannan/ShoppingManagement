import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8501/user/get/all")
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error:Response)
  {
    return Observable.throw (error);
    
  }
}
