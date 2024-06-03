import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Profile } from 'src/app/Models/frontend/Profile';
import { ProfileService } from 'src/app/services/frontend/profile/profile.service';
import { CategoryService } from 'src/app/services/frontend/category/category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent {

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

  constructor(
    private profileService: ProfileService,
 
    private toast: ToastService,
    private cateSer: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  userId:any;
  detailCates:any;

  
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

  ckeditorData: any;


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get('id'));
    this.getDetailProfile();
 
    this.getListDetailCate();

  }


   getDetailProfile() {
    this.profileService.getDetailProfile(this.userId).subscribe((data) => {
      this.profile = data;

      console.log(this.profile);
    });
  }

  getListDetailCate() {
    this.cateSer.getDetailCate().subscribe((data) => {
      this.detailCates = data;
      console.log(this.detailCates);
    });
  }

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

  update() {
    if (this.imageUrl) {
        
     
    
      this.profile.avatar = this.imageUrl;
      this.profile.desciption = this.ckeditorData;

      console.log(this.profile)
      this.profileService.update(this.userId,this.profile).subscribe((data) => {
       
        if (data) {
          this.toast.info('Thêm hồ sơ thành công!!!');
        } else {
          this.toast.info('Thêm hồ sơ ko thành công!!!');
        }
      });
    }
    else{
      this.profile.desciption = this.ckeditorData;

      console.log(this.profile)
      this.profileService.update(this.userId,this.profile).subscribe((data) => {
       
        if (data) {
          this.toast.info('Thêm hồ sơ thành công!!!');
        } else {
          this.toast.info('Thêm hồ sơ ko thành công!!!');
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
