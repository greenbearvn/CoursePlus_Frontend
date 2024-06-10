
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/v1/collections/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/collection/detail/' + id);
  }

  listCourse(id: number): Observable<any> {
    return this.http.get('/api/v1/detailcollection/colllection/' + id);
  }
}
