import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create/create.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { KhoaHoc } from 'src/app/Models/khoahoc';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.css',
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
export class TableCourseComponent {
  constructor(
    public dialog: MatDialog,
    private _toastService: ToastService,
    private khoahocService: KhoahocService,
    private currencyPipe: CurrencyPipe,
    
  ) {}

  lists: any;
  p: number = 1;
  date: any;
  deleteStatus: any;
  token:any;

  searchData:any = ''
  

  khoahoc: KhoaHoc = {
    id: 0,
    TenKhoaHoc: '',
    AnhKhoaHoc: '',
    MoTaNgan: '',
    MoTaDayDu: '',
    ThoiGian: '',
    ThoiLuongKhoaHoc: '',
    GiaCu: 0,
    GiamGia: 0,
    TrangThai: false,
    MaCapDo: 0,
    MaGiangVien: 0,
    MaDanhMuc: 0,
  };



  //font awesome

  faPenToSquare:any =  faPenToSquare;
  faTrash:any = faTrash;
  faEye:any = faEye;

  ngOnInit() {
    this.getUserInSession();
  }
  getUserInSession() {
    this.khoahocService.getUser().subscribe((data) => {
      this.token = data.data.Token;
      this.getLists();
    });
  }

  getLists() {
    this.khoahocService.lists(this.token).subscribe((data) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

  openDialog(type: string, id: number,token:string): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      data: {
        type: type,
        id: id,
        token:token
      },
      maxHeight: '90vh',
      panelClass: 'my-outlined-dialog'
     
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  deleteItem(id: number) {
    this.khoahoc.id = id;
    this.khoahocService.delete(this.khoahoc,this.token).subscribe((data) => {
      this.lists = data.data;
      this.deleteStatus = data.status;
      if (this.deleteStatus) {
        this._toastService.info('Da Xoa Thanh Cong');
      }
    });
  }

  

 

}
