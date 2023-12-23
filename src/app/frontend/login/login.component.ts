import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
    private _toastService: ToastService,
    private router: Router
  ) {}

  userLoginData: any;
  statusLogin: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  login() {
    if (this.user.Email !== '' && this.user.MatKhau !== '') {
      this.accountService.login(this.user).subscribe((data) => {
        this.userLoginData = data.data;
        console.log(this.userLoginData);
        this.statusLogin = data.status;
        console.log(this.statusLogin);
        if (this.statusLogin) {
          this._toastService.info('Đã đăng nhập thành công');
          this.navigateToHome();
        } else {
          this._toastService.warn('Đã đăng nhập không thành công');
        }
      });
    } else {
      console.log('Nhap du thong tin');
    }
  }

  navigateToHome() {
    window.location.href = '/home';
  }
}
