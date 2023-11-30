import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KhoaHoc } from 'src/app/Models/khoahoc';

@Injectable({
  providedIn: 'root',
})
export class KhoahocService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get('/api/account/getUser');
  }
  lists(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>('/api/admin/khoahoc/lists', { headers });
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

  create(khoahoc: KhoaHoc): Observable<any> {
    return this.http.post('/api/admin/khoahoc/create', khoahoc);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/khoahoc/upload', formData);
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/khoahoc/detail/' + id);
  }

  delete(khoahoc: KhoaHoc, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('/api/admin/khoahoc/delete', khoahoc, { headers });
  }

  update(khoahoc: KhoaHoc): Observable<any> {
    return this.http.post('/api/admin/khoahoc/update', khoahoc);
  }
}
