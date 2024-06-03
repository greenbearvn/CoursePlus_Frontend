import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { test } from 'src/app/Models/admin/test';
import { choice } from 'src/app/Models/admin/choice';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  list(id:number): Observable<any> {
    return this.http.get('/api/test/list/teacher/'+id);
  }
  listTeachers(): Observable<any> {
    return this.http.get('/api/admin/test/list/teachers');
  }
  listVideo(): Observable<any> {
    return this.http.get('/api/admin/test/list/videos');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/test/detail/' + id);
  }

  create(test: any): Observable<any> {
    return this.http.post('/api/test/create', test);
  }

  update(test: any): Observable<any> {
    return this.http.post('/api/admin/video/updateTest', test);
  }

  updateChoice(choice: choice): Observable<any> {
    return this.http.post('/api/admin/test/update/choice', choice);
  }

  updateQuestion(question: any): Observable<any> {
    return this.http.post('/api/admin/test/update/question', question);
  }

  delete(test: test): Observable<any> {
    return this.http.post('/api/admin/test/delete', test);
  }

  deleteChoice(choice: any): Observable<any> {
    return this.http.post('/api/admin/test/delete/choice', choice);
  }

  deleteQuestion(question: any): Observable<any> {
    return this.http.post('/api/admin/test/delete/question', question);
  }

  listVideoPage(id: number): Observable<any> {
    return this.http.get('/api/admin/test/list/videos/teacher/' + id);
  }
}
