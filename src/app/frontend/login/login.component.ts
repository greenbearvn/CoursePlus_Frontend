import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { LoginReq } from 'src/app/Models/dto/LoginReq';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../css/style.css'],
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
    private _toastService: ToastService,
    private router: Router
  ) {}

  userLoginData: any;
  statusLogin: any;

  loginData: LoginReq = {
    email: '',
    password: '',
  };

  user: any = {
    userId: 0,
    userName: '',
    email: '',
    role: '',
  };

  profileId: any = 0;
  userName: any;

  login() {
    if (this.loginData.email !== '' && this.loginData.password !== '') {
      this.accountService.login(this.loginData).subscribe((data) => {
        if (data) {
          this.profileId = data.userId;
          this.userName = data.userName;

          if (this.profileId > 0 && this.userName != null) {
            this._toastService.success('Đã đăng nhập thành công');
            this.navToExistProfile();
          }

          if (this.profileId <= 0 && this.userName != null) {
            this._toastService.info('Đã đăng nhập thành công');
            this.navToNewProfile();
          }

          if (this.profileId <= 0 && this.userName == null) {
            this._toastService.info('Đã đăng nhập không thành công');
          }
        } else {
          this._toastService.warn('Đã đăng nhập không thành công');
        }
      });
    } else {
      this._toastService.warn('Vui lòng nhập đầy đủ thông tin');
    }
  }

  navToExistProfile() {
    window.location.href = '/profile/' + this.profileId;
  }

  navToNewProfile() {
    window.location.href = '/profile';
  }
}
