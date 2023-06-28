import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../api/models';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '**',
    'withCredentials': 'true'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users', httpOptions)
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + id, httpOptions)
  }
}
