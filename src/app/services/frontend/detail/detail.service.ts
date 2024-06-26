import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}

 

  getDetail(id: any): Observable<any> {
    return this.http.get('/api/courses/detail/' + id);
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
    return this.http.get('/api/profile/detail/' + id);
  }

  getAllComments(id: any): Observable<any> {
    // return this.http.get('/api/product/comments/' + id);
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  getRecommendCourses(id: any): Observable<any> {
    return this.http.get('/api/product/detail/courses/recommend/' + id);
  }

  getSameCourses(id: any): Observable<any> {
    return this.http.get('/api/product/detail/courses/same/' + id);
  }

  checkBought(collectionId: any, courseId: any): Observable<any> {
    return this.http.get(`/api/v1/detailcollection/detail?collectionId=${collectionId}&courseId=${courseId}`);
  }

  checkBoughtCourse(id: any): Observable<any> {
    return this.http.get('/api/product/detail/check/bought/course/' + id);
  }
}
