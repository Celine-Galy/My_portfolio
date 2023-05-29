import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article, ArticlePatch } from '../api/models';
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
export class ArticleService {

  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + '/articles', httpOptions)
  }
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(this.url + '/articles/' + id, httpOptions)
  }
  addArticle(article: Article) {
    return this.http.post(this.url + '/articles', article, httpOptions)
  }
  deleteArticle(id: number) {
    return this.http.delete(this.url + '/articles/' + id, httpOptions)
  }
  updateArticle(article: ArticlePatch) {
    return this.http.put(this.url + '/articles/', article, httpOptions)
  }
  uploadFile(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Blob>(this.url + '/articles/upload', formData, {
      responseType: 'blob' as 'json',
    });
  }
}
