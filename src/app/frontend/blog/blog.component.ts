import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';
import { blog } from 'src/app/Models/frontend/blog';
import { ToastService } from 'angular-toastify';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { Blog } from 'src/app/Models/admin/blog';
import { CategoryService } from 'src/app/services/frontend/category/category.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.css',
    '../css/style.css'
  ],
})
export class BlogComponent {
  statusLogin: any;
  constructor(
    private blogService: BlogService,
    private _toastService: ToastService,
    private userSer: AccountService,
    private cateSer: CategoryService
  ) {}

  filter: any = {
    records: 10,
    cateId: 0,
    findWith: '',
  };

  cates: any;
  detailCates: any;

  blogs: any;
  relateBlogs: any;

  user:any;

  //forms
  Editor = ClassicEditor;
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  ///create
  alertCreated:any;
  status:any;


  /// blog
  blog: Blog = {
    blogId: 0,
    blogName: "",
    thumnail: "",
    content: "",
    datePublish:new Date(),
    cateid: 0,
    userId: 1,
    status: 0
};

  ngOnInit() {
    this.getList();
    this.getListCate();
    this.getListDetailCate();
    this.recommendBlogs();
    this.getUser();
  }

  

  getList() {
    this.blogService.getLastNews().subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }

  getUser() {
    this.userSer.getUser().subscribe((data) => {
      this.user = data.profile;
      this.statusLogin = data.status;
      console.log(this.user);
    });
  }

 

  filterCate(id: number) {
    this.filter.findWith = 'dm';
    this.filter.cateId = id;

    this.getList();
  }

  filterDetailCate(id: number) {
    this.filter.findWith = 'ctdm';
    this.filter.cateId = id;

    this.getList();
  }

  recommendBlogs() {
    this.blogService.getList().subscribe((data) => {
      this.relateBlogs = data;
      console.log(this.relateBlogs);
    });
  }

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
    console.log(this.ckeditorData);
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.blogService.upload(formData).subscribe((data) => {
        this.imageUrl = data.data;
        console.log(this.imageUrl);
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

  createPost() {
    if (this.imageUrl && this.ckeditorData) {
      this.blog.thumnail = this.imageUrl;
      this.blog.content = this.ckeditorData;
      this.blog.userId = 1;
      this.blog.status = 0;

      this.blogService.create(this.blog).subscribe((data) => {
        
        if(data){
          this._toastService.info("Đăng bài viết thành công");
          this._toastService.info("Bài viết đang được xét duyệt");
        }
        else{
          this._toastService.info("Đăng bài viết không thành công");
        }
      });
      console.log(this.blog);
    } else {
      this._toastService.info('Da Ta Nhat Thanh Cong');
    }
  }
  
  getListCate() {
    this.cateSer.getCate().subscribe((data) => {
      this.cates = data;
      console.table(this.cates);
    });
  }

  getListDetailCate() {
    this.cateSer.getDetailCate().subscribe((data) => {
      this.detailCates = data;
      console.table(this.detailCates);
    });
  }

}
