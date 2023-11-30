import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create/create.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { KhoaHoc } from 'src/app/Models/khoahoc';

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
    private khoahocService: KhoahocService
  ) {}

  lists: any;
  p: number = 1;
  date: any;
  deleteStatus: any;
  token:any;

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

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      data: {
        type: type,
        id: id,
      },
      maxHeight: '90vh',
      panelClass: 'warning-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
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
