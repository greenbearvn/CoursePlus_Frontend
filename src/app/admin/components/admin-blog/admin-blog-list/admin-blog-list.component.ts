import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from 'src/app/services/admin/blog/blog.service';
import { AdminBlogModalComponent } from '../admin-blog-modal/admin-blog-modal.component';
import { Blog } from 'src/app/Models/admin/blog';
import { ToastService } from 'angular-toastify';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import * as e from 'cors';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css'],
})
export class AdminBlogListComponent {
  constructor(
    public dialog: MatDialog,
    private blogService: BlogService,
    private toast: ToastService,
    private route: ActivatedRoute
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  searchData: any;
  status: any;
  userId: any;

  blog: Blog = {
    blogId: 0,
    blogName: '',
    thumnail: '',
    cateid: 0,
    userId: 0,
    status: 0,
  };

  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash: any = faTrash;

  faEye: any = faEye;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get('id'));

    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminBlogModalComponent, {
      data: {
        type: type,
        id: id,
        userId:this.userId
        
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  getLists() {
    if (this.userId > 0) {
      this.blogService.getAllBlogByUserId(this.userId).subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
    } else {
      this.blogService.list().subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
    }
  }

  deleteButton(id: any) {
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
        this.deleteBlog(id);
      }
    });
  }

  deleteBlog(id: any) {
    this.blogService.delete(id).subscribe((data) => {
      if (data == true) {
        this.toast.success('Xóa bài viết thành công');
        this.getLists();
      } else {
        this.toast.warn('Xóa bài viết không thành công');
      }
    });
  }

  updateStatus(id: any, blog: any) {
    this.blogService.update(id, blog).subscribe((data) => {
      if (data) {
        this.toast.success('Cập nhật trạng thái bài viết thành công');
      } else {
        this.toast.success('Cập nhật trạng thái bài viết không thành công');
      }
    });
  }
}
