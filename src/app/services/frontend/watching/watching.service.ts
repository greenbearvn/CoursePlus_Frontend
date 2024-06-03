import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchingService {
  constructor(private http: HttpClient) {}

  getDetailVideo(mavideo: any): Observable<any> {
    return this.http.get('/api/v1/videos/detail/' + mavideo);
  }

  getQuestionOfVideo(mavideo: any): Observable<any> {
    return this.http.get('/api/watching/video/questions/' + mavideo);
  }

  getAllTests(makhoahoc: any): Observable<any> {
    return this.http.get('/api/watching/video/all/tests/' + makhoahoc);
  }
}
