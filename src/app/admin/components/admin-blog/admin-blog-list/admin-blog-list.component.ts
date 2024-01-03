import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from 'src/app/services/admin/blog/blog.service';
import { AdminBlogModalComponent } from '../admin-blog-modal/admin-blog-modal.component';
import { blog } from 'src/app/Models/frontend/blog';
import { ToastService } from 'angular-toastify';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: [
    './admin-blog-list.component.css',
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
export class AdminBlogListComponent {
  constructor(
    public dialog: MatDialog,
    private blogService: BlogService,
    private toast: ToastService
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  searchData: any;
  status: any;

  blog: blog = {
    MaBaiViet: 0,
    TenBaiViet: '',
    NoiDung: '',
    AnhMinhHoa: '',
    NgayDang: '',
    MaDanhMuc: 0,
    MaNguoiDung: 0,
    TrangThai: 0,
  };

  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash: any = faTrash;

  ngOnInit() {
    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminBlogModalComponent, {
      data: {
        type: type,
        id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  getLists() {
    this.blogService.list().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  deleteBlog(item: any) {
    this.blogService.delete(item).subscribe((data) => {
      this.getLists();
    });
  }

  changeStatus(blog: blog) {
    if(blog.TrangThai == 1){
      blog.TrangThai = 0 ;
      this.blogService.update(blog).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          this.toast.info('Cập nhật trạng thái bài viết thành công !!!');
        }
        else{
          this.toast.info('Cập nhật trạng thái bài viết không thành công !!!');
        }
      });
    }
    else{
      blog.TrangThai = 1 ;
      this.blogService.update(blog).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          this.toast.info('Cập nhật trạng thái bài viết thành công !!!');
        }
        else{
          this.toast.info('Cập nhật trạng thái bài viết không thành công !!!');
        }
      });
    }
    
  }
}
