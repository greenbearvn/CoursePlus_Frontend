import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { BlogService } from 'src/app/services/admin/blog/blog.service';
import { ToastService } from 'angular-toastify';
import { blog } from 'src/app/Models/frontend/blog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { nguoidung } from 'src/app/Models/nguoidung';
import { AdminProfileListUsersComponent } from '../../admin-profile/admin-profile-list-users/admin-profile-list-users.component';
import { Blog } from 'src/app/Models/admin/blog';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { CategoryService } from 'src/app/services/frontend/category/category.service';

@Component({
  selector: 'app-admin-blog-modal',
  templateUrl: './admin-blog-modal.component.html',
  styleUrls: ['./admin-blog-modal.component.css'],
})
export class AdminBlogModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminBlogModalComponent>,
    private blogService: BlogService,
    public dialog: MatDialog,
    private _toastService: ToastService,
    private usService: NguoidungService,
    private cateService: CategoryService
  ) {}

  type: any;
  id: any;
  userId: any;

  // nguoidung: nguoidung = {
  //   MaNguoiDung: 0,
  //   TenNguoiDung: '',
  //   Email: '',
  //   MatKhau: '',
  //   Quyen: '',
  // };
  blog: Blog = {
    blogId: 0,
    blogName: '',
    thumnail: '',
    cateid: 0,
    userId: 0,
    status: 0,
  };
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

  ///
  statusCreate: any;
  statusEdit: any;

  ///
  listUsers: any;
  listCategories: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.userId = this.data.userId;

    console.log(this.userId)
    this.getDataForm();
    this.getListUsers();
    this.getListCategories();
  }

  getDataForm() {
    if (this.type == 'edit') {
      this.getDetail();
    }
  }

  getDetail() {
    this.blogService.detail(this.id).subscribe((data) => {
      this.blog = data;
      console.log(this.blog);
    });
  }

  getListUsers() {
    this.usService.list().subscribe((data) => {
      this.listUsers = data;
      console.log(this.listUsers);
    });
  }

  getListCategories() {
    this.cateService.getDetailCate().subscribe((data) => {
      this.listCategories = data;
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
    if (this.imageUrl) {
      if (this.userId > 0) {
        this.blog.userId = this.userId;
        this.blog.status = 0;
      }

      this.blog.thumnail = this.imageUrl;

      this.blogService.create(this.blog).subscribe((data) => {
        if (data) {
          this._toastService.success('Đã thêm  thành công');
        } else {
          this._toastService.warn('Đã thêm không thành công');
        }
      });
    }
  }

  update() {
    if (this.selectedFile && this.imageUrl) {
      this.blog.thumnail = this.imageUrl;
      this.blogService.update(this.id, this.blog).subscribe((data) => {
        if (data) {
          this._toastService.success('Đã cập nhật bài viết thành công!!!');
        }
      });
    } else {
      this.blogService.update(this.id, this.blog).subscribe((data) => {
        if (data) {
          this._toastService.info('Đã cập nhật bài viết thành công!!!');
        }
      });
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.blogService.upload(formData).subscribe((data) => {
        this.imageUrl = data.data;
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      console.log(this.selectedFile);
    }
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
    dialogRef.afterClosed().subscribe((result) => {});
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
