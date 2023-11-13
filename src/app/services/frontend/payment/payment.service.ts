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

  transation(): Observable<any> {
    return this.http.post('/api/payment/onlinepay',{});
  }
  returndata(): Observable<any> {
    return this.http.get('/api/payment/returndata');
  }
}
