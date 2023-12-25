import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comment } from 'src/app/Models/admin/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  gteList(id: any): Observable<any> {
    return this.http.get('/api/comment/list/comments/' + id);
  }

  checkDelete(id: any): Observable<any> {
    return this.http.get('/api/comment/check/' + id);
  }

  delete(comment: comment): Observable<any> {
    return this.http.post('/api/comment/delete', comment);
  }
}
