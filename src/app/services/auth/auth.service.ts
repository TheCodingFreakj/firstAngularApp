import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from '../../user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>(); // store the auth user

  token = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {}
  uri = 'http://localhost:5000';
  signup(fields: any) {
    return this.httpClient.post(`${this.uri}/api/v1/sign-up`, fields).pipe(
      catchError((error) => {
        let errorMess = '';
        console.log(error.error);
        if (error.error.message.message) {
          errorMess = error.error.message.message;
        } else {
          errorMess = error.error.message;
        }

        console.log(errorMess);
        return throwError(() => errorMess);
      })
    );
  }
  signin(fields: any) {
    return this.httpClient.post(`${this.uri}/api/v1/sign-in`, fields).pipe(
      catchError((error) => {
        let errorMess = '';
        console.log(error.error);
        if (error.error.message.message) {
          errorMess = error.error.message.message;
        } else {
          errorMess = error.error.message;
        }

        console.log(errorMess);

        return throwError(() => errorMess);
      })
    );
  }
}
