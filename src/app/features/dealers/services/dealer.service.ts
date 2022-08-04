import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dealer } from '../models/Dealer';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  private url: string = `${environment.API}`;
  constructor(private http: HttpClient) { }
  
  
  GetPlayerInfo(): Observable<Player>{
    return this.http.get<Player>(`${this.url}/api/player`).pipe(map((result:any)=>result.data.customers));
  }

}
