import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { ToastService } from 'angular-toastify';
import { User } from 'src/app/Models/frontend/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css','../css/style.css'
  ],
})
export class RegisterComponent {
  constructor(private accountService: AccountService
    ,private toast:ToastService,
    private router: Router) {}

  isRegister: any;
  rePass: any;

  user: User = {
    userId: 0,
    userName: '',
    email: '',
    password: '',
    role: '',
  };

  register() {
    if (
      this.user.userName !== '' &&
      this.user.email !== '' &&
      this.user.password !== ''
      && this.rePass !== ''
    ) {
      if (this.user.password === this.rePass) {
        this.accountService.register(this.user).subscribe((data) => {
    
          if(data){
            this.toast.info("Đăng ký thành công !!!")
            this.router.navigate(['/account/login']);
          }
          else{
            this.toast.info("Đăng ký không thành công !!!")
          }
        });
      }
      else{
        this.toast.info("Mật khẩu nhập lại không trùng với mật khẩu !!!")
      }
    }
    else{
      this.toast.warn("Các trường bắt buộc phải nhập dư liệu !!!")
    }
  }
}
