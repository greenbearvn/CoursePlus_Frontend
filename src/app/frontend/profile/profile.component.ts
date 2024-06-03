import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/frontend/profile/profile.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Profile } from 'src/app/Models/frontend/Profile';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { CategoryService } from 'src/app/services/frontend/category/category.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', ],
})
export class ProfileComponent {
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private accountService: AccountService,
    private cateSer: CategoryService
  ) {}
  profile: Profile = {
    profileId: 0,
    profileName: '',
    email: '',
    phoneNumber: '',
    avatar: '',
    desciption: '',
    cateId: 0,
    isTeacher: 0,
  };

  id: any;
  room: any = 0;
  user: any;

  detailCates:any;

  ///
  listCategories: any;
  ckeditorData: any;
  status: any;

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // this.id = Number(routeParams.get('id'));
    // this.getDetailProfile(this.id);
    // this.getListCategories();
    this.getListDetailCate();
    this.getUser();
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.user_current;
      console.log(this.user);
    });
  }


 

  getListDetailCate() {
    this.cateSer.getDetailCate().subscribe((data) => {
      this.detailCates = data;
      console.log(this.detailCates);
    });
  }

  // createRoom(id: any) {
  //   this.user.MaNguoiDung = id;
  //   this.profileService.createRoom(this.user).subscribe((data) => {
  //     this.room = data.data;

  //     if (this.room > 0) {
  //       this.navigateToRoom(this.room);
  //     }
  //   });
  // }

  // navigateToRoom(id: any) {
  //   this.router.navigateByUrl('/chat/' + id + '/' + this.profile.MaHoSo);
  // }

  // becomeTeacher() {
  //   if (this.profile.GiangVien == 0) {
  //     this.profile.GiangVien = 1;
  //   }
  // }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.profileService.upload(formData).subscribe((data) => {
        this.imageUrl = data.data;
        console.log(this.imageUrl);
      });
    }
  }



  create() {
    if (this.imageUrl) {
        
     
      this.profile.profileId = this.user.userId;
      this.profile.avatar = this.imageUrl;
      this.profile.desciption = this.ckeditorData;

      console.log(this.profile)
      this.profileService.create(this.profile).subscribe((data) => {
       
        if (data) {
          this.toast.info('Thêm hồ sơ thành công!!!');
        } else {
          this.toast.info('Thêm hồ sơ ko thành công!!!');
        }
      });
    }
  }

  // update() {
  //   if (this.imageUrl) {
  //     this.profile.MaHoSo = this.id;
  //     this.profile.AnhDaiDien = this.imageUrl;
  //     this.profileService.update(this.profile).subscribe((data) => {
  //       this.status = data.data;
  //       if (this.status == true) {
  //         this.toast.info('Cập nhật hồ sơ thành công!!!');
  //       }
  //     });
  //   } else {
  //     this.profile.MaHoSo = this.id;

  //     this.profileService.update(this.profile).subscribe((data) => {
  //       this.status = data.data;
  //       if (this.status == true) {
  //         this.toast.info('Cập nhật hồ sơ thành công!!!');
  //       }
  //     });
  //   }
  // }

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
