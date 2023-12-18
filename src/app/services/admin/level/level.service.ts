import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { level } from 'src/app/Models/admin/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/admin/level/list');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/level/detail/' + id);
  }

  create(level: level): Observable<any> {
    return this.http.post('/api/admin/level/create', level);
  }

  delete(level: level): Observable<any> {
    return this.http.post('/api/admin/level/delete', level);
  }

  update(level: level): Observable<any> {
    return this.http.post('/api/admin/level/update', level);
  }
}
