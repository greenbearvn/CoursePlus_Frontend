import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/frontend/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post('/api/user/create',  user );
  }

  login(loginData:any): Observable<any> {
    return this.http.post('/api/user/login', loginData );
  }
  getUser():Observable<any> {
    return this.http.get('/api/user/getuser');
  }

  getProfile(profileId:any):Observable<any> {
    return this.http.get('/api/profile/detail/'+profileId);
  }

  logout(data:any): Observable<any> {
    return this.http.post('/api/user/logut',data);
}

} 
  