import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/admin/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<any>('/api/categories/list') ;
  }

  create(object: Category): Observable<any> {

    return this.http.post('/api/categories/create', object);
  }

  upload(formData: FormData): Observable<any> {

    return this.http.post('/api/categories/uploadImage', formData);
  }

  edit(id:any,object: Category): Observable<any> {

    return this.http.put('/api/categories/edit/'+id, object);
  }

  detail(id:any): Observable<any> {

    return this.http.get<any>('/api/categories/detail/' + id) ;
  }
  delete(id:any): Observable<any> {

    return this.http.delete<any>('/api/categories/delete/' + id) ;
  }
}
