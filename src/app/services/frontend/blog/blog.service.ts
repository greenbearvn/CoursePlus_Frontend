import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getList(filter:any): Observable<any> {
    return this.http.post('/api/blog/list/blogs' , filter);
  }

  getCate(): Observable<any> {
    return this.http.get('/api/blog/list/categories' );
  }
}
