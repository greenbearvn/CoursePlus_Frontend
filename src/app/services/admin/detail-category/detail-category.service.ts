import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { detailcategory } from 'src/app/Models/admin/detailcategory';

@Injectable({
  providedIn: 'root',
})
export class DetailCategoryService {
  constructor(private http: HttpClient) {}

  list(id: number): Observable<any> {
    return this.http.get('/api/admin/detail-category/list/' + id);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/detail-category/detail/' + id);
  }

  create(dCate: detailcategory): Observable<any> {
    return this.http.post('/api/admin/detail-category/create', dCate);
  }

  update(dCate: detailcategory): Observable<any> {
    return this.http.post('/api/admin/detail-category/update', dCate);
  }

  delete(dCate: detailcategory): Observable<any> {
    return this.http.post('/api/admin/detail-category/delete', dCate);
  }
}
