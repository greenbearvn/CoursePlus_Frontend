import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { video } from 'src/app/Models/admin/video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  list(makhoahoc: number): Observable<any> {
    return this.http.get('/api/admin/video/list/' + makhoahoc);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/video/detail/' + id);
  }

  create(video: any): Observable<any> {
    return this.http.post('/api/admin/video/create', video);
  }

  update(video: any): Observable<any> {
    return this.http.post('/api/admin/video/update', video);
  }

  delete(video: video): Observable<any> {
    return this.http.post('/api/admin/video/delete', video);
  }

  listLessions(): Observable<any> {
    return this.http.get('/api/admin/video/lessions');
  }
}
