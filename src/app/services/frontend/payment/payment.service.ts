import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  saveToDB(): Observable<any> {
    return this.http.post('/api/payment/savedata',{});
  }

  transation(bankCode:any,content:any): Observable<any> {
    return this.http.post('/api/payment/onlinepay',{bankCode,content});
  }
  returndata(): Observable<any> {
    return this.http.get('/api/payment/returndata');
  }

  addCollection(): Observable<any> {
    return this.http.get('/api/payment/addcollections');
  }

  listBanks(): Observable<any> {
    return this.http.get('https://api.vietqr.io/v2/banks');
  }
}
