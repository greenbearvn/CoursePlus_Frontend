import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getlistCart(): Observable<any> {
    return this.http.get('/api/cart/product/list');
  }

  addCart(cart: Cart): Observable<any> {
    return this.http.post('/api/cart/product/addCart', {
      cart,
    });
  }

  deleteItem(id: any): Observable<any> {
    return this.http.post('/api/cart/product/delete/', { id });
  }

  totalMoney(): Observable<any> {
    return this.http.get('/api/cart/product/totalmoney');
  }
}
