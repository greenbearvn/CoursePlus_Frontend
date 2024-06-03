import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  getCollectionId(userId:any){
    return this.http.get('/api/v1/collections/user/'+ userId);
  }

  getListCollection(collectionId:any): Observable<any> {
    return this.http.get('/api/v1/detailcollection/colllection/'+collectionId);
  }



}
