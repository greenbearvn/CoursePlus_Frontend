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
    return this.http.get('/api/detailcates/list/category/' + id);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/detailcates/detail/' + id);
  }

  create(dCate: any): Observable<any> {
    return this.http.post('/api/detailcates/create', dCate);
  }

  update(id:any,dCate: detailcategory): Observable<any> {
    return this.http.put('/api/detailcates/edit/'+id, dCate);
  }

  delete(dCate: any): Observable<any> {
    return this.http.delete('/api/detailcates/delete/' + dCate );
  }
}
