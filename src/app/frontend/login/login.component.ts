import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
import { ToastService } from 'angular-toastify';
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
    private _toastService: ToastService
  ) {}

  userLoginData: any;
  statusLogin: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: false,
  };

  login() {
    if (this.user.Email !== '' && this.user.MatKhau !== '') {
      this.accountService.login(this.user).subscribe((data) => {
        this.userLoginData = data.data;
        console.log(this.userLoginData)
        this.statusLogin = data.status;
        console.log(this.statusLogin)
        if (this.statusLogin) {
          this._toastService.info('Da Dang Nhap Thanh Cong');
        } else {
          this._toastService.info('Da Dang Nhap Khong Thanh Cong');
        }
      });
    } else {
      console.log('Nhap du thong tin');
    }
  }
}
