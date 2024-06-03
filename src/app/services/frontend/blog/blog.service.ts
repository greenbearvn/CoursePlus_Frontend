import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from 'src/app/Models/frontend/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getLastNews(): Observable<any> {
    return this.http.get('/api/v1/blog/list/new' );
  }

  getList(): Observable<any> {
    return this.http.get('/api/v1/blog/list' );
  }

  getDetail(id:any): Observable<any> {
    return this.http.get('/api/v1/blog/detail/' + id);
  }

  getRecommendBlogs(id:any): Observable<any> {
    return this.http.get('/api/v1/blog//list/categoryId/' + id);
  }


  getCate(): Observable<any> {
    return this.http.get('/api/blog/list/categories' );
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/v1/blog/uploadImage', formData);
  }

  create(blog: any): Observable<any> {
    return this.http.post('/api/v1/blog/create', blog);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/blog/detail/' +id);
  }
}
