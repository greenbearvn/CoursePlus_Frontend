import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-modalnguoidungadmin',
  templateUrl: './modalnguoidungadmin.component.html',
  styleUrls: [
    './modalnguoidungadmin.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/charts/chartist-bundle/chartist.css',
    '../../../assets/polygon/concept/assets/vendor/charts/morris-bundle/morris.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css',
    '../../../assets/polygon/concept/assets/vendor/charts/c3charts/c3.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/flag-icon-css/flag-icon.min.css',
  ],
})
export class ModalnguoidungadminComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalnguoidungadminComponent>,
    private usService: NguoidungService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;

  nguoidung: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  ///status
  statusCreate: any;
  statusEdit: any;



  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.getDataForm();
    // this.token = this.data.token;
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetailUser();
    }
  }

  getDetailUser() {
    this.usService.detail(this.id).subscribe((data) => {
      this.nguoidung = data.data;
      console.log(this.nguoidung);
    });
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.usService.create(this.nguoidung).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusCreate) {
        this._toastService.info('Đã thêm người dùng thành công');
      } else {
        this._toastService.warn('Đã thêm người dùng không thành công');
      }
    });
  }
  update() {
    this.usService.update(this.nguoidung).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusEdit) {
        this._toastService.info('Đã cập nhật người dùng thành công');
      } else {
        this._toastService.warn('Đã cập nhật người dùng không thành công');
      }
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
