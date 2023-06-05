import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../api/models';
import { Observable } from 'rxjs';
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
export class CategoryService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/categories', httpOptions)
  }
  addCategory(category: Category) {
    return this.http.post(this.url + '/categories', category)
  }
}
