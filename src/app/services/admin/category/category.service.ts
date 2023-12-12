import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from 'src/app/Models/admin/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/admin/category/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/category/detail/' + id);
  }

  create(category: category): Observable<any> {
    return this.http.post('/api/admin/category/create', category);
  }

  update(category: category): Observable<any> {
    return this.http.post('/api/admin/category/update/', category);
  }

  delete(category: category): Observable<any> {
    return this.http.post('/api/admin/category/delete', category);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/category/upload', formData);
  }
}
