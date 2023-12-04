import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { HoaDon } from 'src/app/Models/admin/hoadon';
import { HoadonService } from 'src/app/services/admin/hoadon/hoadon.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formbill',
  templateUrl: './formbill.component.html',
  styleUrls: [
    './formbill.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/dataTables.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/buttons.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/select.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/fixedHeader.bootstrap4.css',
  ],
})
export class FormbillComponent {
  constructor(
    private route: ActivatedRoute,
    private _toastService: ToastService,
    private hdService: HoadonService
  ) {}

  type: any;
  id: any;
  statusForm: any = '';
  hoadon: HoaDon = {
    MaDonHang: 0,
    MaNguoiDung: 0,
    NgayLap: '',
    Tongtien: 0,
  };

  resCU: any;
  resUpdate: any;

  ///

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');
    this.statusForm = this.type;

    if (routeParams.get('id')) {
      this.id = routeParams.get('id');
      this.getDetail(this.id);
    }

    this.getListUsers();
    this.getListDetailItems();
  }

  lists: any;
  listDetails: any ;
  listUsers: any;
  p: number = 1;
  searchData: any = '';

  faTrash: any = faTrash;

  receiveData(values: { listItems: any; Tongtien: any }) {
    this.lists = values.listItems;
    this.hoadon.Tongtien = values.Tongtien;
  }

  deleteCartItem(index: number, giamoi: number) {
    this.hoadon.Tongtien -= Number(giamoi);
    this.lists.splice(index, 1);
  }

  getListUsers() {
    this.hdService.getListUsers().subscribe((data) => {
      this.listUsers = data.data;
      console.log(this.listUsers);
    });
  }

  getDetail(id: number) {
    this.hdService.getDetailBill(id).subscribe((data) => {
      this.hoadon = data.data;
      console.log(this.hoadon);
    });
  }

  getListDetailItems() {
    if (this.id && this.statusForm == 'update') {
      this.hdService.getListdetailItems(this.id).subscribe((data) => {
        this.listDetails = data.data;
        console.log(this.listDetails);
      });
    }
  }

  deleteItems(donhang: HoaDon) {
    this.hdService.deleteItems(donhang).subscribe((data) => {
      this.listDetails = data.data;
    });
  }

  SubmitData() {
    if (this.statusForm === 'create') {
      this.hdService
        .createBill(
          this.hoadon.MaNguoiDung,
          this.hoadon.NgayLap,
          this.hoadon.Tongtien,
          this.lists
        )
        .subscribe((data) => {
          this.resCU = data.data;
          if (this.resCU) {
            this._toastService.info('Đã thêm đơn hàng thành công');
          } else {
            this._toastService.warn(
              'Có khóa học đã được người mua trước đó!!!'
            );
          }
        });
    } else {
      this.hdService
        .updateBill(
          this.hoadon.MaDonHang,
          this.hoadon.MaNguoiDung,
          this.hoadon.NgayLap,
          this.hoadon.Tongtien,
          this.lists
        )
        .subscribe((data) => {
          this.resCU = data.data;
          if (this.resUpdate) {
            this._toastService.info(this.resUpdate);
          }
        });
    }
  }
}
