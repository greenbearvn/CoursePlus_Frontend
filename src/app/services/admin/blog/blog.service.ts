import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from 'src/app/Models/frontend/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/admin/blog/list');
  }

  listUser(): Observable<any> {
    return this.http.get('/api/admin/blog/list/users');
  }

  listCategories(): Observable<any> {
    return this.http.get('/api/admin/blog/list/categories');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/blog/detail/' + id);
  }

  create(blog: blog): Observable<any> {
    return this.http.post('/api/admin/blog/create', blog);
  }

  delete(blog: blog): Observable<any> {
    return this.http.post('/api/admin/blog/delete', blog);
  }

  update(blog: blog): Observable<any> {
    return this.http.post('/api/admin/blog/update', blog);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/blog/upload', formData);
  }
}
