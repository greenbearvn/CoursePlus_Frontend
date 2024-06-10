import { Component, Input } from '@angular/core';
import { CommentService } from 'src/app/services/frontend/comment/comment.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { Comment } from 'src/app/Models/frontend/Comment';
import * as e from 'cors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css', '../css/style.css'],
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

  user: any;

  comment: Comment = {
    commentId: 0,
    courseId: 0,
    userId: 0,
    content: '',
    timePublish: new Date()
  };


  commentCurrent:any;

  ngOnInit() {
    this.getList();
    this.getUser();
  }

  getList() {
    this.commentService.gteList(this.MaKhoaHoc).subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.user_current;
    });
  }

  checkDelete(id:any,item:any) {

    this.commentCurrent = id;
    if(this.commentCurrent == id && item.comment.userId == this.user.userId){
      this.showDelete = !this.showDelete;

    }
    else{
      this.showDelete = false;
    }
  }

  deleteButton(id:any){

    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Một khi bạn xóa, bạn sẽ không thể khôi phục lại thông tin này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa đi!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
      }
    });
  }

  delete(id: any) {
    this.commentService.delete(id).subscribe((data) => {
      this.status = data;
      if (data) {
        this._toastService.info('Đã xóa bình luận thành công');
        this.getList();
      }
    });
  }

  create() {
    this.comment.courseId = this.MaKhoaHoc;
    this.comment.userId = this.user.userId;
    this.comment.timePublish = new Date();
    this.commentService.create(this.comment).subscribe((data) => {
      
      if (data) {
        this._toastService.success('Đã thêm bình luận  thành công');
        this.getList();
      } else {
        this._toastService.warn('Đã thêm bình luận không thành công');
        this.getList();
      }
    });
  }

  getCurrentDate():string{
    const now = new Date();
    const yearNow: number = now.getFullYear();
    const monthNow: number = now.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
    const dateNow: number = now.getDate();

    return yearNow + "-"+monthNow + "-"+ dateNow;
  }
}
