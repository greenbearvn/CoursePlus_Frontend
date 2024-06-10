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
    return this.http.get('/api/v1/levels/list');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/v1/levels/detail/' + id);
  }

  create(level: level): Observable<any> {
    return this.http.post('/api/v1/levels/create', level);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/v1/levels/delete/' +id);
  }

  update(id:any,level: level): Observable<any> {
    return this.http.put('/api/v1/levels/edit/' +id, level);
  }
}
