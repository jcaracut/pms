import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dealer } from '../models/Dealer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private url: string = `${environment.API}`;
  // constructor(private http: HttpClient) { }
  
  
  // GetDealers(): Observable<Dealer[]>{
  //   return this.http.get<Dealer[]>(`${this.url}/api/customers`).pipe(map((result:any)=>result.data.customers));
  // }

}
