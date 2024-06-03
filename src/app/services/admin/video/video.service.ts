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
    return this.http.get('/api/v1/videos/list/' + makhoahoc);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/v1/videos/detail/' + id);
  }

  create(video: any): Observable<any> {
    return this.http.post('/api/v1/videos/create', video);
  }

  update(id:any,video: any): Observable<any> {
    return this.http.put('/api/v1/videos/edit/'+id, video);
  }

  delete(id:any): Observable<any> {
    return this.http.delete('/api/v1/videos/delete/'+id);
  }

  listLessions(): Observable<any> {
    return this.http.get('/api/admin/video/lessions');
  }
}
