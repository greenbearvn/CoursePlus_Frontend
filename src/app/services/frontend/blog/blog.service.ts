import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from 'src/app/Models/frontend/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getList(filter:any): Observable<any> {
    return this.http.post('/api/blog/list/blogs' , filter);
  }

  getCate(): Observable<any> {
    return this.http.get('/api/blog/list/categories' );
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/blog/upload', formData);
  }

  create(blog: blog): Observable<any> {
    return this.http.post('/api/blog/create', blog);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/blog/detail/' +id);
  }
}
