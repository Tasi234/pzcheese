import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cheese } from './cheese.interface';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {
  private url = 'http://localhost:3000/cheeseData';

  constructor(private http: HttpClient) { }

  getCheese(): Observable<Cheese[]> {
    return this.http.get<Cheese[]>(this.url);
  }
}
