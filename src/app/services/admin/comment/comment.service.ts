import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comment } from 'src/app/Models/admin/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('/api/v1/comment/list');
  }

  commentsOfCourse(id: number): Observable<any> {
    return this.http.get('/api/v1/comment/list/' + id);
  }

  listCourses(): Observable<any> {
    return this.http.get('/api/admin/comment/list/courses');
  }

  listUsers(): Observable<any> {
    return this.http.get('/api/admin/comment/list/users');
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/comment/detail/' + id);
  }

  create(comment: comment): Observable<any> {
    return this.http.post('/api/admin/comment/create', comment);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('/api/v1/comment/delete/' +id);
  }

  update(comment: comment): Observable<any> {
    return this.http.post('/api/admin/comment/update', comment);
  }
}
