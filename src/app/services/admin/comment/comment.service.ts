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
    return this.http.get('/api/admin/comment/list');
  }

  commentsOfCourse(id: number): Observable<any> {
    return this.http.get('/api/admin/comment/list/comments/course/' + id);
  }

  detail(id: any): Observable<any> {
    return this.http.get('/api/admin/comment/detail/' + id);
  }

  create(comment: comment): Observable<any> {
    return this.http.post('/api/admin/comment/create', comment);
  }

  delete(comment: comment): Observable<any> {
    return this.http.post('/api/admin/comment/delete', comment);
  }

  update(comment: comment): Observable<any> {
    return this.http.post('/api/admin/comment/update', comment);
  }
}
