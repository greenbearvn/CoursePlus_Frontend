import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { test } from 'src/app/Models/admin/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/admin/test/list');
  }
  
  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/test/detail/' + id);
  }

  create(test: any): Observable<any> {
    return this.http.post('/api/admin/test/create', test);
  }

  update(test: test): Observable<any> {
    return this.http.post('/api/admin/test/update', test);
  }

  delete(test: test): Observable<any> {
    return this.http.post('/api/admin/test/delete', test);
  }
}
