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

  makhoahoc: any;

  ///
  courses: any;
  users: any;

  nguoidung: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  comment: comment = {
    MaBinhLuan: 0,
    MaKhoaHoc: 0,
    MaNguoiDung: 0,
    NoiDung: '',
    ThoiGian: '',
  };

  ckeditorData: any;
  Editor = ClassicEditor;

  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.makhoahoc = this.data.makhoahoc;
    this.getDataForm();
    if (this.makhoahoc == undefined) {
      this.getCourses();
    }
    this.getUsers();
  }

  getDataForm() {
    if (this.type == 'edit') {
      this.getDetail();
    }
  }

  getDetail() {
    this.commentService.detail(this.id).subscribe((data) => {
      this.comment = data.data;
      console.log(this.comment);
    });
  }

  getCourses() {
    this.commentService.listCourses().subscribe((data) => {
      this.courses = data.data;
      console.log(this.courses);
    });
  }

  getUsers() {
    this.commentService.listUsers().subscribe((data) => {
      this.users = data.data;
      console.log(this.users);
    });
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    if (this.makhoahoc !== undefined) {
      this.comment.MaKhoaHoc = this.makhoahoc;
    }
    this.commentService.create(this.comment).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusCreate == true) {
        this._toastService.info('Đã thêm  thành công');
      } else {
        this._toastService.warn('Đã thêm không thành công');
      }
    });
  }

  update() {
    console.log(this.comment);
    this.commentService.update(this.comment).subscribe((data) => {
      this.statusEdit = data.data;

      if (this.statusEdit == true) {
        this._toastService.info('Đã cập nhật thành công!!!');
      }
    });
  }

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
    console.log(this.ckeditorData);
  }

  openDialog(type: any): void {
    const dialogRef = this.dialog.open(AdminProfileListUsersComponent, {
      data: {
        type: type,
        // id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.nguoidung = result;
      this.comment.MaNguoiDung = this.nguoidung.MaNguoiDung;
      console.log(this.nguoidung);
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
