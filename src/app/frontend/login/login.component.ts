import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
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
  constructor(private accountService: AccountService) {}

  userLoginData:any;

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
        console.log(this.userLoginData);
      });
    } else {
      console.log('Nhap du thong tin');
    }
    
  }
}
