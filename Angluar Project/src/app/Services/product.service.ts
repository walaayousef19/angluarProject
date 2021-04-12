import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../Shared class/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:IProduct[];
constructor(private http: HttpClient) { }
url='/assets/Data/Products.json';

  getAllProduct():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
    }
  
     
    
  

