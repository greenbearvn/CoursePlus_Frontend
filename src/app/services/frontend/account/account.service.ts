import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nguoidung } from 'src/app/Models/nguoidung';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  register(user: nguoidung): Observable<any> {
    return this.http.post('/api/account/register', { user });
  }

  login(user: nguoidung): Observable<any> {
    return this.http.post('/api/account/authen', user );
  }
  getUser():Observable<any> {
    return this.http.get('/api/account/getUser');
  }

  logout():Observable<any> {
    return this.http.post('/api/account/logout' , {});
  }
} 
  