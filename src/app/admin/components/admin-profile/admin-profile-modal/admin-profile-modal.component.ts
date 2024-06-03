import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ProfileService } from 'src/app/services/admin/profile/profile.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { profile } from 'src/app/Models/admin/profile';
import { AdminProfileListUsersComponent } from '../admin-profile-list-users/admin-profile-list-users.component';

@Component({
  selector: 'app-admin-profile-modal',
  templateUrl: './admin-profile-modal.component.html',
  styleUrls: [
    './admin-profile-modal.component.css'
  
  ],
})
export class AdminProfileModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminProfileModalComponent>,
    private profileService: ProfileService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  nguoidung: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  profile: profile = {
    MaHoSo: 0,
    TenHoSo: '',
    Email: '',
    SoDienThoai: '',
    AnhDaiDien: '',
    MoTa: '',
    MaDanhMuc: 0,
    GiangVien: 0,
  };

  type: any;
  id: any;
  ckeditorData: any;

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  // Editor = ClassicEditor;

  ///
  listUsers: any;
  listCategories: any;

  ///
  createRes: any;
  updateRes: any;

  openDialog(type: any): void {
    const dialogRef = this.dialog.open(AdminProfileListUsersComponent, {
      data: {
        type: type,
        // id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.nguoidung = result;
      this.profile.MaHoSo = this.nguoidung.MaNguoiDung;
      console.log(this.nguoidung);
    });
  }

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    // this.getUserInSession();
    this.getListUsers();
    this.getListCategories();
    this.detail();
  }

  detail() {
    if (this.type == 'update') {
      this.profileService.detail(this.id).subscribe((data) => {
        this.profile = data.data;
        console.log(this.profile);
      });
    }
  }

  getListUsers() {
    this.profileService.listUser().subscribe((data) => {
      this.listUsers = data.data;
      console.log(this.listUsers);
    });
  }

  getListCategories() {
    this.profileService.listCategories().subscribe((data) => {
      this.listCategories = data.data;
      console.log(this.listCategories);
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
    if (this.imageUrl) {
      this.profile.AnhDaiDien = this.imageUrl;
      this.profileService.create(this.profile).subscribe((data) => {
        this.createRes = data.data;
        if (this.createRes == true) {
          this._toastService.info('Thêm hồ sơ thành công!!!');
        }
      });
    }
  }

  update() {
    console.log(this.profile);
     
      this.profileService.update(this.profile).subscribe((data) => {
        this.updateRes = data.data;
        if (this.updateRes == true) {
          this._toastService.info('Cập nhật hồ sơ thành công!!!');
        }
      });
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.profileService.upload(formData).subscribe((data) => {
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

  // public onChange({ editor }: ChangeEvent) {
  //   this.ckeditorData = editor.data.get();
  //   console.log(this.ckeditorData);
  // }
}
