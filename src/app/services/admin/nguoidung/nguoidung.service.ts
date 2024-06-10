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
    return this.http.get('/api/user/list');
  }

  detail(id:any): Observable<any> {
    return this.http.get('/api/admin/nguoidung/detail/'+id);
  }

  create(nguoidung:nguoidung): Observable<any> {
    return this.http.post('/api/admin/nguoidung/create',nguoidung);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/user/delete/'+ id);
  }

  update(id:any,user:any): Observable<any> {
    return this.http.put('/api/user/update/'+id,user);
  }
}
