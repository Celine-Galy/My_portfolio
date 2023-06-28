import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential, User } from '../api/models';

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
export class AuthService {
  url = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { }

  public login(credentials: ICredential): Observable<any> {
    return this.http.post(this.url, credentials, httpOptions);
  }
  public register(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/auth/register', user, httpOptions);
  }
  public getProfile(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/auth/profile', httpOptions);
  }
}
