import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { TestedService } from 'src/app/services/admin/tested/tested.service';
import { tested } from 'src/app/Models/admin/tested';
import { AdminProfileListUsersComponent } from '../../admin-profile/admin-profile-list-users/admin-profile-list-users.component';
import { nguoidung } from 'src/app/Models/nguoidung';

@Component({
  selector: 'app-admin-tested-modal',
  templateUrl: './admin-tested-modal.component.html',
  styleUrls: [
    './admin-tested-modal.component.css',
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
export class AdminTestedModalComponent {
  listTests: any;

  MaGiangVien: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminTestedModalComponent>,
    private testedService: TestedService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;
  token: any;

  listUsers: any;

  status: any;

  tested: tested = {
    MaBaiLam: 0,
    MaNguoiDung: 0,
    MaBaiKT: 0,
    ThoiGianNop: '',
    ChinhXac: 0,
  };

  nguoidung: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminProfileListUsersComponent, {
      data: {
        MaGiangVien: this.MaGiangVien,
        // id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.nguoidung = result;
      this.tested.MaNguoiDung = this.nguoidung.MaNguoiDung;
      console.log(this.nguoidung);
    });
  }

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.MaGiangVien = this.data.MaGiangVien;
    // this.token = this.data.token;
    if (this.type == 'update') {
      this.getDeTail();
    }
    this.getListUsers();
    this.getListTests();
  }

  getDeTail() {
    this.testedService.detail(this.id).subscribe((data) => {
      this.tested = data.data;
      console.log(this.tested);
    });
  }

  getListUsers() {
    if (this.MaGiangVien > 0) {
      this.testedService.listUser(this.MaGiangVien).subscribe((data) => {
        this.listUsers = data.data;
        console.log(this.listUsers);
      });
    } else {
      this.testedService.listUser(0).subscribe((data) => {
        this.listUsers = data.data;
        console.log(this.listUsers);
      });
    }
  }

  getListTests() {
    this.testedService.listTests(this.MaGiangVien).subscribe((data) => {
      this.listTests = data.data;
      console.log(this.listTests);
    });
  }

  submit(type: any) {
    if (type == 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.testedService.create(this.tested).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this._toastService.info('Thêm thành công!!!');
      } else {
        this._toastService.warn('Thêm không thành công!!!');
      }
    });
  }

  update() {
    this.testedService.update(this.tested).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this._toastService.info('Cập nhật thành công !!!');
      } else {
        this._toastService.warn('Cập nhật không thành công!!!');
      }
    });
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
