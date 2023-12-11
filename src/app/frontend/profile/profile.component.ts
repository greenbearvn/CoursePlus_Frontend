import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/frontend/profile/profile.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../css/bootstrap.min.css'],
})
export class ProfileComponent {
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  profile: any;
  room: any = 0;
  userSession:any;

  ngOnInit() {  
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.getDetailProfile(id);
  }

  getDetailProfile(id: any) {
    this.profileService.getDetailProfile(id).subscribe((data) => {
      this.profile = data.data;
      this.userSession = data.user
      
    });
  }

  createRoom(id: any) {
    this.user.MaNguoiDung = id;
    this.profileService.createRoom(this.user).subscribe((data) => {
      this.room = data.data;
      console.log(this.room);
      if (this.room > 0) {
        this.navigateToRoom(this.room);
        // this.navigateToRoom();
      }
    });
  }
  

  navigateToRoom(id: any) {
    this.router.navigateByUrl('/chat/'+id );
  }
}
