import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoadonService {
  constructor(private http: HttpClient) {}

  getLists(): Observable<any> {
    return this.http.get('/api/admin/hoadon/list');
  }

  getListUsers(): Observable<any> {
    return this.http.get('/api/admin/hoadon/list/users');
  }

  createBill(
    MaNguoiDung: number,
    NgayLap: string,
    Tongtien: number,
    detailItems: any
  ): Observable<any> {
    const params = new HttpParams()
      .set('MaNguoiDung', MaNguoiDung.toString())
      .set('NgayLap', NgayLap.toString())
      .set('Tongtien', Tongtien.toString());

    return this.http.post('/api/admin/hoadon/create', detailItems, {
      params: params,
    });
  }

  updateBill(
    MaDonHang: number,
    MaNguoiDung: number,
    NgayLap: string,
    Tongtien: number,
    detailItems: any
  ): Observable<any> {
    const params = new HttpParams()
      .set('MaDonHang', MaDonHang.toString())
      .set('MaNguoiDung', MaNguoiDung.toString())
      .set('NgayLap', NgayLap.toString())
      .set('Tongtien', Tongtien.toString());

    return this.http.post('/api/admin/hoadon/update', detailItems, {
      params: params,
    });
  }

  getListdetailItems(id: any): Observable<any> {
    return this.http.get('/api/admin/hoadon/list/details/' + id);
  }

  getDetailBill(id: any): Observable<any> {
    return this.http.get('/api/admin/hoadon/detail/' + id);
  }

  deleteBill(donhang: any): Observable<any> {
    return this.http.post('/api/admin/hoadon/delete', donhang);
  }

  deleteItems(donhang: any): Observable<any> {
    return this.http.post('/api/admin/hoadon/detail/items/delete', donhang);
  }
}
