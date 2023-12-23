import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tested } from 'src/app/Models/admin/tested';

@Injectable({
  providedIn: 'root',
})
export class TestedService {
  constructor(private http: HttpClient) {}

  list(id: number): Observable<any> {
    return this.http.get('/api/admin/tested/list/' + id);
  }
  listTests(id:number): Observable<any> {
    return this.http.get('/api/admin/tested/list/tests/'+id);
  }
  listUser(id:number): Observable<any> {
    return this.http.get('/api/admin/tested/list/users/'+id);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/tested/detail/' + id);
  }

  create(tested: tested): Observable<any> {
    return this.http.post('/api/admin/tested/create', tested);
  }

  delete(tested: tested): Observable<any> {
    return this.http.post('/api/admin/tested/create', tested);
  }

  update(tested: tested): Observable<any> {
    return this.http.post('/api/admin/tested/update', tested);
  }
}
