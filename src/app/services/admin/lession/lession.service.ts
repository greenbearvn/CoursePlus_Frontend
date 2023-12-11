import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lession } from 'src/app/Models/admin/lession';

@Injectable({
  providedIn: 'root',
})
export class LessionService {
  constructor(private http: HttpClient) {}

  list(makhoahoc: number): Observable<any> {
    return this.http.get('/api/admin/lession/list/' + makhoahoc);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/lession/detail/' + id);
  }

  listCourses(): Observable<any> {
    return this.http.get('/api/admin/lession/courses');
  }

  create(lession: any): Observable<any> {
    return this.http.post('/api/admin/lession/create', lession);
  }

  update(lession: any): Observable<any> {
    return this.http.post('/api/admin/lession/detail/', lession);
  }

  delete(lession: lession): Observable<any> {
    return this.http.post('/api/admin/lession/delete', lession);
  }

  
}
