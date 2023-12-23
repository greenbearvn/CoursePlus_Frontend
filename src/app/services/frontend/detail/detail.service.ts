import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}

  getDetail(id: any): Observable<any> {
    return this.http.get('/api/product/detail/' + id);
  }

  getLessions(id: any): Observable<any> {
    return this.http.get('/api/product/detail/lessions/' + id);
  }

  getVideos(id: any): Observable<any> {
    return this.http.get('/api/product/detail/lessions/videos/' + id);
  }

  getListQuestions(id: any): Observable<any> {
    return this.http.get('/api/product/detail/questions/' + id);
  }

  getTeachersOfCour(id: any): Observable<any> {
    return this.http.get('/api/product/detail/teacher/' + id);
  }

  getAllComments(id: any): Observable<any> {
    return this.http.get('/api/product/comments/' + id);
  }

  getRecommendCourses(id: any): Observable<any> {
    return this.http.get('/api/product/detail/courses/recommend/' + id);
  }

  checkBought(id:any): Observable<any> {
    return this.http.get('/api/product/detail/check/bought/'+ id);
  }
}
