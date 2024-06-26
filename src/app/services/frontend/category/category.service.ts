import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCate(): Observable<any> {
    return this.http.get('/api/categories/list' );
  }

  getDetailCate(): Observable<any> {
    return this.http.get('/api/detailcates/list' );
  }

  getListCourses(filter:any): Observable<any> {
    return this.http.post('/api/category/list/courses',filter );
  }
}
