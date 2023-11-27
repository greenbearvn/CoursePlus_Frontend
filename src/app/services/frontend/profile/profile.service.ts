import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nguoidung } from 'src/app/Models/nguoidung';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getDetailProfile(id: any): Observable<any> {
    return this.http.get('/api/profile/person/' + id);
  }

  createRoom(nguuoidung: nguoidung): Observable<any> {
    return this.http.post('/api/profile/create/convention', nguuoidung);
  }
}
