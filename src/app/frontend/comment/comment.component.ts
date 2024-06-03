import { Component, Input } from '@angular/core';
import { CommentService } from 'src/app/services/frontend/comment/comment.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { comment } from 'src/app/Models/admin/comment';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: [
    './comment.component.css','../css/style.css'
  ],
})
export class CommentComponent {
  constructor(
    private commentService: CommentService,
    private _toastService: ToastService,
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  @Input() MaKhoaHoc: any;
  faCircleInfo: any = faCircleInfo;
  faTrash: any = faTrash;

  list: any;
  status: any = false;
  p: any = 1;

  MaNguoiDung: any = 0;

  showDelete: any;

  comment: comment = {
    MaBinhLuan: 0,
    MaKhoaHoc: 0,
    MaNguoiDung: 0,
    NoiDung: '',
    ThoiGian: '',
  };

  ngOnInit() {
    this.getList();
    this.getUser();
  }

  getList() {
    this.commentService.gteList(this.MaKhoaHoc).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.MaNguoiDung = data.data.MaNguoiDung;
      console.log(this.list);
    });
  }

  checkDelete(id: any) {
    this.commentService.checkDelete(id).subscribe((data) => {
      this.showDelete = data.data;
    });
  }

  delete(item: any) {
    this.commentService.delete(item).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this._toastService.info('Đã xóa bình luận thành công');
        this.getList();
      }
    });
  }

  create() {
    if (this.MaNguoiDung > 0) {
      this.comment.MaKhoaHoc = this.MaKhoaHoc;
      this.comment.MaNguoiDung = this.MaNguoiDung;
      this.commentService.create(this.comment).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          this._toastService.info('Đã thêm bình luận  thành công');
          this.getList();
        } else {
          this._toastService.warn('Đã thêm bình luận không thành công');
          this.getList();
        }
      });
    } else {
      this._toastService.info('Vui lòng đăng nhập để bình luận !!!');
      const cf = confirm('Bạn có muốn đi đăng nhập không ?');
      if (cf == true) {
        window.location.href = '/account/login';
      }
    }
  }
}
