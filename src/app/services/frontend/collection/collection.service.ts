import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  getListCollection(filter: any): Observable<any> {
    return this.http.post('/api/collection/list/collections', filter);
  }

  getUser():Observable<any> {
    return this.http.get('/api/account/getUser');
  }

}
