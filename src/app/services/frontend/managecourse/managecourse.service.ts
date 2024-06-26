import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course';

@Injectable({
  providedIn: 'root',
})
export class ManagecourseService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get('/api/account/getUser');
  }

  listLevels(): Observable<any> {
    return this.http.get('/api/admin/usmanage/lists/capdo');
  }

  listTeachers(): Observable<any> {
    return this.http.get('/api/admin/usmanage/lists/giangvien');
  }

  listDetailCate(): Observable<any> {
    return this.http.get('/api/admin/usmanage/lists/ctdanhmuc');
  }

  create(khoahoc: Course): Observable<any> {
    return this.http.post('/api/admin/usmanage/create', khoahoc);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/usmanage/upload', formData);
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/usmanage/detail/' + id);
  }

  delete(khoahoc: Course): Observable<any> {
    return this.http.post('/api/admin/usmanage/delete', khoahoc);
  }

  update(khoahoc: Course): Observable<any> {
    return this.http.post('/api/admin/usmanage/update', khoahoc);
  }

  listCourse(MaNguoiDung: any): Observable<any> {
    return this.http.get(
      '/api/admin/usmanage/list/courses/user/' + MaNguoiDung
    );
  }
}
