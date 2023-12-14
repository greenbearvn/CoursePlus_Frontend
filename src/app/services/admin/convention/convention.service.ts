import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { convention } from 'src/app/Models/admin/convention';
import { userconvention } from 'src/app/Models/admin/userconvention';
import { message } from 'src/app/Models/admin/message';

@Injectable({
  providedIn: 'root',
})
export class ConventionService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/admin/convention/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/convention/detail/' + id);
  }

  create(convention: convention): Observable<any> {
    return this.http.post('/api/admin/convention/create', convention);
  }

  update(convention: convention): Observable<any> {
    return this.http.post('/api/admin/convention/update', convention);
  }

  delete(convention: convention): Observable<any> {
    return this.http.post('/api/admin/convention/delete', convention);
  }

  createUserConvention(userconvention: userconvention): Observable<any> {
    return this.http.post(
      '/api/admin/convention/insert/userconvention',    
      userconvention
    );
  }

  createMessage(message: message): Observable<any> {
    return this.http.post('/api/admin/convention/insert/message', message);
  }

  listUsers(): Observable<any> {
    return this.http.get('/api/admin/convention/list/user');
  }

  listUserConvention(id: number): Observable<any> {
    return this.http.get('/api/admin/convention/list/userconvention/' + id);
  }
}
