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

  listLevels(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('/api/admin/khoahoc/lists/capdo', { headers });
  }

  listTeachers(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('/api/admin/khoahoc/lists/giangvien', { headers });
  }

  listDetailCate(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('/api/admin/khoahoc/lists/ctdanhmuc', { headers });
  }

  create(khoahoc: KhoaHoc, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('/api/admin/khoahoc/create', khoahoc, { headers });
  }

  upload(formData: FormData, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('/api/admin/khoahoc/upload', formData, { headers });
  }

  detail(id: any, token: any): Observable<any> {
    return this.http.get('/api/admin/khoahoc/detail/' + id);
  }

  delete(khoahoc: KhoaHoc, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('/api/admin/khoahoc/delete', khoahoc, { headers });
  }

  update(khoahoc: KhoaHoc, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('/api/admin/khoahoc/update', khoahoc, { headers });
  }

  // detail(id: any, token: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });
  //   return this.http.get('/api/admin/khoahoc/detail/' + id, { headers });
  // }
}
