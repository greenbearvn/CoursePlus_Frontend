import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getListNew(): Observable<any> {
    return this.http.get('/api/home/list/new/courses');
  }

  getTeachers(): Observable<any> {
    return this.http.get('/api/home/list/new/teachers');
  }

  getListBlog(): Observable<any> {
    return this.http.get('/api/home/list/new/blogs');
  }
}
