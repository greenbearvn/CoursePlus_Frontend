import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nguoidung } from 'src/app/Models/nguoidung';

@Injectable({
  providedIn: 'root',
})
export class NguoidungService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> { 
    return this.http.get('/api/admin/nguoidung/list');
  }

  detail(id:any): Observable<any> {
    return this.http.get('/api/admin/nguoidung/detail/'+id);
  }

  create(nguoidung:nguoidung): Observable<any> {
    return this.http.post('/api/admin/nguoidung/create',nguoidung);
  }

  delete(nguoidung:nguoidung): Observable<any> {
    return this.http.post('/api/admin/nguoidung/delete',nguoidung);
  }

  update(nguoidung:nguoidung): Observable<any> {
    return this.http.post('/api/admin/nguoidung/edit',nguoidung);
  }
}
