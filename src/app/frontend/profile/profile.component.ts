import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/frontend/profile/profile.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { Router } from '@angular/router';
import { profile } from 'src/app/Models/admin/profile';

import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../css/bootstrap.min.css'],
})
export class ProfileComponent {
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  user: nguoidung = {
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

  id: any;
  room: any = 0;
  userSession: any;
  type: any = 'create';

  ///
  listCategories: any;
  ckeditorData: any;
  status: any;

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.getDetailProfile(this.id);
    this.getListCategories();
  }

  getDetailProfile(id: any) {
    this.profileService.getDetailProfile(id).subscribe((data) => {
      this.profile = data.data;
      this.userSession = data.user;

      console.log(this.profile);
      console.log(this.userSession);

      if (this.profile == undefined) {
        this.profile = {
          MaHoSo: 0,
          TenHoSo: '',
          Email: '',
          SoDienThoai: '',
          AnhDaiDien: '',
          MoTa: '',
          MaDanhMuc: 0,
          GiangVien: 0,
        };
        this.type = 'create';
      } else {
        this.type = 'update';
      }
    });
  }

  getListCategories() {
    this.profileService.getListCat().subscribe((data) => {
      this.listCategories = data.data;

      console.log(this.listCategories);
    });
  }

  createRoom(id: any) {
    this.user.MaNguoiDung = id;
    this.profileService.createRoom(this.user).subscribe((data) => {
      this.room = data.data;

      if (this.room > 0) {
        this.navigateToRoom(this.room);
      }
    });
  }

  navigateToRoom(id: any) {
    this.router.navigateByUrl('/chat/' + id + '/' + this.profile.MaHoSo);
  }

  becomeTeacher() {
    if (this.profile.GiangVien == 0) {
      this.profile.GiangVien = 1;
    }
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

  submit(type: any) {
    if (type == 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    if (
      this.profile.TenHoSo == '' ||
      this.profile.Email == '' ||
      this.profile.SoDienThoai == '' ||
      this.profile.MoTa == ''
    ) {
      if (this.imageUrl) {
        this.profile.MaHoSo = this.id;
        this.profile.AnhDaiDien = this.imageUrl;

        this.profileService.create(this.profile).subscribe((data) => {
          this.status = data.data;
          if (this.status == true) {
            this.toast.info('Thêm hồ sơ thành công!!!');
          } else {
            this.toast.info('Thêm hồ sơ ko thành công!!!');
          }
        });
      }
    }
    else{
      this.toast.info('Vui lòng nhập đầy đủ thông tin các trường !!!');
    }
  }

  update() {
    if (this.imageUrl) {
      this.profile.MaHoSo = this.id;
      this.profile.AnhDaiDien = this.imageUrl;
      this.profileService.update(this.profile).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          this.toast.info('Cập nhật hồ sơ thành công!!!');
        }
      });
    } else {
      this.profile.MaHoSo = this.id;

      this.profileService.update(this.profile).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          this.toast.info('Cập nhật hồ sơ thành công!!!');
        }
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

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
    console.log(this.ckeditorData);
  }
}
