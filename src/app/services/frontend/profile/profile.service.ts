import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nguoidung } from 'src/app/Models/nguoidung';
import { profile } from 'src/app/Models/admin/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getDetailProfile(id: any): Observable<any> {
    return this.http.get('/api/profile/person/' + id);
  }

  getListCat(): Observable<any> {
    return this.http.get('/api/profile/list/cateogories' );
  }

  createRoom(nguuoidung: nguoidung): Observable<any> {
    return this.http.post('/api/profile/create/convention', nguuoidung);
  }
  create(profile: profile): Observable<any> {
    return this.http.post('/api/profile/create', profile);
  }

  update(profile: profile): Observable<any> {
    return this.http.post('/api/profile/update', profile);
  }


  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/profile/upload', formData);
  }
}
