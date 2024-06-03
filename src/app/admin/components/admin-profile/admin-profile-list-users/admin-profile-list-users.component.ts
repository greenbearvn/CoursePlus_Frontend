import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { TestedService } from 'src/app/services/admin/tested/tested.service';
import { ToastService } from 'angular-toastify';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-profile-list-users',
  templateUrl: './admin-profile-list-users.component.html',
  styleUrls: [
    './admin-profile-list-users.component.css'
  ],
})
export class AdminProfileListUsersComponent {
  constructor(
    public dialog: MatDialog,
    private nguoidungService: NguoidungService,
    private testedService: TestedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminProfileListUsersComponent>,
    private _toastService: ToastService
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  MaGiangVien: any;

  searchData: any;

  ///
  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;

  ngOnInit() {
    this.getUserInSession();
    this.MaGiangVien = this.data.MaGiangVien;
    this.getLists();
  }

  getUserInSession() {
    // this.khoahocService.getUser().subscribe((data) => {
    //   this.token = data.data.Token;
    //   this.getLists();
    // });
  }

  getLists() {
    if (this.MaGiangVien > 0) {
      this.testedService.listUser(this.MaGiangVien).subscribe((data) => {
        this.list = data.data;
        console.log(this.list);
      });
    } else {
      this.nguoidungService.list().subscribe((data) => {
        this.list = data.data;
        console.log(this.list);
      });
    }
  }
  addUser(user: any) {
    this.user = user;
    if (this.user) {
      this._toastService.info('Chọn người dùng thành công!!!');
    }
  }
  closeModal(): void {
    this.dialogRef.close(this.user);
  }
}
