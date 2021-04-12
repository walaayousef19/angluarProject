import { Injectable } from '@angular/core';
import { IUser } from '../Shared class/IUser';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/users';

  returnAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
