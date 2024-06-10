import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profile } from 'src/app/Models/admin/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/profile/list');
  }

  listUser(): Observable<any> {
    return this.http.get('/api/admin/profile/list/users');
  }

  listCategories(): Observable<any> {
    return this.http.get('/api/admin/profile/list/categories');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/profile/detail/' + id);
  }

  // create(profile: profile): Observable<any> {
  //   return this.http.post('/api/admin/profile/create', profile);
  // }

  // delete(id:any): Observable<any> {
  //   return this.http.delete('/api/profile/delete/' + id);
  // }

  // update(profile: profile): Observable<any> {
  //   return this.http.post('/api/admin/video/updateProfile', profile);
  // }

  // upload(formData: FormData): Observable<any> {
  //   return this.http.post('/api/admin/profile/upload', formData);
  // }

  /////////////////////new////////////////

  getDetailProfile(id: any): Observable<any> {
    return this.http.get('/api/profile/detail/' + id);
  }
  create(profile:any): Observable<any> {
    return this.http.post('/api/profile/create', profile);
  }

  update(id:any,profile:any): Observable<any> {
    return this.http.post('/api/profile/update/'+id, profile);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/profile/delete/'+id);
  }


  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/profile/uploadImage', formData);
  }
 

}
