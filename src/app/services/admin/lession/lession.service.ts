import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lession } from 'src/app/Models/admin/lession';

@Injectable({
  providedIn: 'root',
})
export class LessionService {
  constructor(private http: HttpClient) {}

  list(id: number): Observable<any> {
    return this.http.get('/api/lessions/course/' + id);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/lessions/detail/' + id);
  }

  listCourses(): Observable<any> {
    return this.http.get('/api/admin/lession/courses');
  }

  create(lession: any): Observable<any> {
    return this.http.post('/api/lessions/create', lession);
  }

  update(id:any,lession: any): Observable<any> {
    return this.http.put('/api/lessions/edit/' +id, lession);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/lessions/delete/' + id);
  }

  
}
