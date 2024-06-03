import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/Models/admin/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/v1/blog/list');
  }

  listUser(): Observable<any> {
    return this.http.get('/api/admin/blog/list/users');
  }

  listCategories(): Observable<any> {
    return this.http.get('/api/admin/blog/list/categories');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/v1/blog/detail/' + id);
  }

  create(blog: Blog): Observable<any> {
    return this.http.post('/api/v1/blog/create', blog);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/v1/blog/delete/' +id);
  }

  update(id:any,blog: Blog): Observable<any> {
    return this.http.put('/api/v1/blog/edit/'+id, blog);
  }

  upload(formData: FormData): Observable<any> {
   
    return this.http.post('/api/v1/blog/uploadImage', formData);
  }
}
