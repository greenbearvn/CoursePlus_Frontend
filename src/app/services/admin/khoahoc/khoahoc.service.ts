import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KhoaHoc } from 'src/app/Models/khoahoc';

@Injectable({
  providedIn: 'root',
})
export class KhoahocService {
  constructor(private http: HttpClient) {}

  lists(): Observable<any> {
    return this.http.get('/api/admin/khoahoc/lists');
  }

  listLevels(): Observable<any> {
    return this.http.get('/api/admin/khoahoc/lists/capdo');
  }

  listTeachers(): Observable<any> {
    return this.http.get('/api/admin/khoahoc/lists/giangvien');
  }

  listDetailCate(): Observable<any> {
    return this.http.get('/api/admin/khoahoc/lists/ctdanhmuc');
  }

  create(khoahoc:KhoaHoc): Observable<any> {
    return this.http.post('/api/admin/khoahoc/create',khoahoc);
  }

  upload(formData:FormData): Observable<any> {
    return this.http.post('/api/admin/khoahoc/upload',formData);
  }

  detail(id:any): Observable<any> {
    return this.http.get('/api/admin/khoahoc/detail/' + id);
  }

  delete(khoahoc:KhoaHoc): Observable<any> {
    
    return this.http.post('/api/admin/khoahoc/delete' , khoahoc);
  }


  update(khoahoc:KhoaHoc): Observable<any> {
    
    return this.http.post('/api/admin/khoahoc/update' , khoahoc);
  }
}
