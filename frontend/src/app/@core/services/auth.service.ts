import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from '../api/models';

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
  public getProfile(): Observable<any> {
    return this.http.get('http://localhost:3000/auth/profile', httpOptions);
  }
}
