import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { LessionService } from 'src/app/services/admin/lession/lession.service';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { ToastService } from 'angular-toastify';
import { lession } from 'src/app/Models/admin/lession';

@Component({
  selector: 'app-lessionmodal',
  templateUrl: './lessionmodal.component.html',
  styleUrls: [
    './lessionmodal.component.css',
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
export class LessionmodalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LessionmodalComponent>,
    private lessService: LessionService,
    private userService: NguoidungService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;

  lession: lession = {
    MaBaiHoc: 0,
    MaKhoaHoc: 0,
    TenBaiHoc: '',
    ThoiGianHoanThanh: '',
  };

  listCourses: any;

  ///status
  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.lession.MaKhoaHoc = this.data.MaKhoaHoc;

    this.getDataForm();
    // this.token = this.data.token;
    this.getListLession();
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetailLession();
    }
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  getDetailLession() {
    this.lessService.detail(this.id).subscribe((data) => {
      this.lession = data.data;
      console.log(this.lession);
    });
  }

  getListLession() {
    this.lessService.listCourses().subscribe((data) => {
      this.listCourses = data.data;
      console.log(this.listCourses);
    });
  }

  create() {
    console.log(this.lession);
    this.lessService.create(this.lession).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusCreate == true) {
        this._toastService.info('Đã thêm người dùng thành công');
      } else {
        this._toastService.warn('Đã thêm người dùng không thành công');
      }
    });
  }

  update() {
    this.lessService.update(this.lession).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusEdit == true) {
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
