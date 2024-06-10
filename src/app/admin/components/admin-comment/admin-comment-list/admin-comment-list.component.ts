import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AdminCommentModalComponent } from '../admin-comment-modal/admin-comment-modal.component';
import { CommentService } from 'src/app/services/admin/comment/comment.service';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'angular-toastify';
import * as e from 'cors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-comment-list',
  templateUrl: './admin-comment-list.component.html',
  styleUrls: [
    './admin-comment-list.component.css'
  ],
})
export class AdminCommentListComponent {
  constructor(
    public dialog: MatDialog,
    private commentService: CommentService,
    private toast: ToastService
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  searchData: any;

  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash: any = faTrash;

  @Input()
  makhoahoc!: any;

  ngOnInit() {
    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminCommentModalComponent, {
      data: {
        type: type,
        id: id,
        makhoahoc: this.makhoahoc,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  getLists() {
    if (this.makhoahoc == undefined) {
      this.commentService.list().subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
    } else {
      this.commentService.commentsOfCourse(this.makhoahoc).subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
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

      if(data == true){
        this.toast.success("Đã xóa bình luận thành công!!!")
        this.getLists();
      }
      else{
        this.toast.warn("Đã xóa bình luận không thành công!!!")
      }

    });
  }
}
