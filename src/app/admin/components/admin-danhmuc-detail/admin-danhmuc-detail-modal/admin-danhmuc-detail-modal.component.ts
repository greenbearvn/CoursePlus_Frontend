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
  styleUrls: ['./admin-danhmuc-detail-modal.component.css'],
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
    cateId: 0,
    detailCateName: '',
    detailCateId: 0,
  };

  ///status
  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.dCate.cateId = this.data.madm;

    this.getDataForm();
    // this.token = this.data.token;
  }

  getDetail() {
    this.dCateService.detail(this.id).subscribe((data) => {
      this.dCate = data;
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
      if (data) {
        this._toastService.success('Đã thêm chi tiết thể loại thành công');
      } else {
        this._toastService.warn('Đã thêm không thành công');
      }
    });
  }

  update() {
    this.dCateService.update(this.id, this.dCate).subscribe((data) => {
      if (data) {
        this._toastService.info('Đã cập nhật thành công');
      } else {
        this._toastService.warn('Đã cập nhật không thành công');
      }
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
