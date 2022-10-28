import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { User } from '../login';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getData() : Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json')

  }
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>('../assets/users.json')
  }
}
