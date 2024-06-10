import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course';

@Injectable({
  providedIn: 'root',
})
export class KhoahocService {
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {

    return this.http.get<any>('/api/courses/list') ;
  }

  detail(id:any): Observable<any> {

    return this.http.get<any>('/api/courses/detail/' + id) ;
  }

  upload(formData: FormData): Observable<any> {
   
    return this.http.post('/api/courses/uploadImage', formData);
  }

  create(course: Course): Observable<any> {

    return this.http.post('/api/courses/create', course);
  }

  edit(id:any,course: Course): Observable<any> {

    return this.http.put('/api/courses/edit/'+id, course);
  }

  delete(id:any): Observable<any> {

    return this.http.delete('/api/courses/delete/'+id);
  }

  detailCates(): Observable<any> {
    return this.http.get('/api/detailcates/list');
  }

  levels(): Observable<any> {
    return this.http.get('/api/v1/levels/list');
  }


  teachers(): Observable<any> {
    return this.http.get('/api/profile/list');
  }


  getAllByProfileId(id:any): Observable<any> {
    return this.http.get('/api/courses/list/teacher/'+id);
  }
}
