import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class RegisterComponent {
  constructor(private accountService: AccountService) {}

  isRegister: any;
  rePass: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  register() {
    if (
      this.user.TenNguoiDung !== '' &&
      this.user.Email !== '' &&
      this.user.MatKhau !== ''
      && this.rePass !== ''
    ) {
      if (this.user.MatKhau === this.rePass) {
        this.accountService.register(this.user).subscribe((data) => {
          this.isRegister = data.data;
          console.log(this.isRegister);
        });
      }
      else{
        console.log("Nhap lai mat khau")
      }
    }
    else{
      console.log("Nhap du thong tin")
    }
    console.log(this.user);
  }
}
