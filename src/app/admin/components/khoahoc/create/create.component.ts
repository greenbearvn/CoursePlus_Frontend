import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { KhoaHoc } from 'src/app/Models/khoahoc';

@Component({
  selector: 'app-course-create',
  templateUrl: './create.component.html',
  styleUrls: [
    './create.component.css',
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
export class CreateCourseComponent implements OnInit {
  type: any;
  id: any;
  token:any
  detailCourse: any;
  levels: any;
  teachers: any;
  detailCates: any;
  ckeditorData: any;
  createStatus: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;
  alertStatus: any;

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateCourseComponent>,
    private khService: KhoahocService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.token = this.data.token;
    this.getDataForm();
  }

  getDataForm() {
    if (this.type === 'create' && this.id === 0) {
      this.getLevels();
      this.getTeachers();
      this.getDetailCate();
    } else {
      this.getDeTailCourse();
      this.getLevels();
      this.getTeachers();
      this.getDetailCate();
    }
  }

  getDeTailCourse() {
    console.log(this.id)
    this.khService.detail(this.id,this.token).subscribe((data) => {
      this.khoahoc = data.data;
      console.log(this.khoahoc);
    });
  }

  getLevels() {
    this.khService.listLevels(this.token).subscribe((data) => {
      this.levels = data.data;
      console.log(this.levels);
    });
  }

  getTeachers() {
    this.khService.listTeachers(this.token).subscribe((data) => {
      this.teachers = data.data;
      console.log(this.teachers);
    });
  }

  getDetailCate() {
    this.khService.listDetailCate(this.token).subscribe((data) => {
      this.detailCates = data.data;
      console.log(this.detailCates);
    });
  }

  create() {
    if (this.khoahoc.TenKhoaHoc !== '') {
      if (this.imageUrl && this.ckeditorData) {
        this.khoahoc.MoTaDayDu = this.ckeditorData;
        this.khoahoc.AnhKhoaHoc = this.imageUrl;
        this.khService.create(this.khoahoc,this.token).subscribe((data) => {
          this.createStatus = data.data;
          alert(this.createStatus);
        });
        console.log(this.khoahoc);
      } else {
        console.log('Nhap lai mat khau');
      }
    } else {
      console.log('Nhap du thong tin');
    }
  }

  edit() {
    if (this.selectedFile && this.imageUrl) {
      this.khoahoc.AnhKhoaHoc = this.imageUrl;
      this.khService.update(this.khoahoc,this.token).subscribe((data) => {
        this.alertStatus = data.status;

        if (this.alertStatus) {
          this._toastService.info('Da Cap Nhat Thanh Cong');
        }
      });
    } else {
      this.khService.update(this.khoahoc,this.token).subscribe((data) => {
        this.alertStatus = data.status;

        if (this.alertStatus) {
          this._toastService.info('Da Cap Nhat Thanh Cong');
        }
      });
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.khService.upload(formData,this.token).subscribe((data) => {
        this.imageUrl = data.fileurl;
        console.log(this.imageUrl);
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      console.log(this.selectedFile);
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
    console.log(this.ckeditorData);
  }
}
