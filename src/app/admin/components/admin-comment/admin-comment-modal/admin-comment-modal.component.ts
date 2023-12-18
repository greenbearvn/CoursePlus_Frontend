import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { comment } from 'src/app/Models/admin/comment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { nguoidung } from 'src/app/Models/nguoidung';
import { AdminProfileListUsersComponent } from '../../admin-profile/admin-profile-list-users/admin-profile-list-users.component';
import { CommentService } from 'src/app/services/admin/comment/comment.service';

@Component({
  selector: 'app-admin-comment-modal',
  templateUrl: './admin-comment-modal.component.html',
  styleUrls: [
    './admin-comment-modal.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/dataTables.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/buttons.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/select.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/fixedHeader.bootstrap4.css',
  ],
})
export class AdminCommentModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminCommentModalComponent>,
    private commentService: CommentService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;


  nguoidung: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  comment:comment = {
    MaBinhLuan:0,
    MaKhoaHoc:0,
    MaNguoiDung:0,
    NoiDung:'',
    ThoiGian:''
  }

  ckeditorData: any;
  Editor = ClassicEditor;


  statusCreate: any;
  statusEdit: any;

}
