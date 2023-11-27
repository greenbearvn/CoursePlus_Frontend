import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getBestSeller(): Observable<any> {
    return this.http.get('/api/product/list/bestseller');
  }


  getTeachers(): Observable<any> {
    return this.http.get('/api/product/list/teacher');
  }

  getNewCourses(): Observable<any> {
    return this.http.get('/api/product/list/newcourses');
  }

  getListBlog(): Observable<any> {
    return this.http.get('/api/product/list/blogs');
  }
}
