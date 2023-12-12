import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { DetailCategoryService } from 'src/app/services/admin/detail-category/detail-category.service';
import { ToastService } from 'angular-toastify';
import { detailcategory } from 'src/app/Models/admin/detailcategory';

@Component({
  selector: 'app-admin-danhmuc-detail-modal',
  templateUrl: './admin-danhmuc-detail-modal.component.html',
  styleUrls: [
    './admin-danhmuc-detail-modal.component.css',
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
export class AdminDanhmucDetailModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminDanhmucDetailModalComponent>,
    private dCateService: DetailCategoryService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  madm: any;
  type: any;
  id: any;

  dCate: detailcategory = {
    MaCTDM: 0,
    TenCTDM: '',
    madm: 0,
  };

  ///status
  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.dCate.madm = this.data.madm;

    this.getDataForm();
    // this.token = this.data.token;
  }

  getDetail() {
    this.dCateService.detail(this.id).subscribe((data) => {
      this.dCate = data.data;
      console.log(this.dCate);
    });
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetail();
    }
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.dCateService.create(this.dCate).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusCreate == true) {
        this._toastService.info('Đã thêm người dùng thành công');
      } else {
        this._toastService.warn('Đã thêm người dùng không thành công');
      }
    });
  }

  update() {
    this.dCateService.update(this.dCate).subscribe((data) => {
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
