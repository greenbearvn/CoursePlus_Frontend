import { Component } from '@angular/core';
import { nguoidung } from 'src/app/Models/nguoidung';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './sidebar.component.css'
  ],
})
export class SidebarAdminComponent {
  constructor(private accountService: AccountService) {}

  user: any = {
    userId : 0,
    userName:"",
    email:"",
    role:''
  };
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.user_current;
      console.log(this.user);
      console.log(this.user.role)
    });
  }
}
