import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';
import { blog } from 'src/app/Models/frontend/blog';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class BlogComponent {
  constructor(
    private blogService: BlogService,
    private _toastService: ToastService
  ) {}

  filter: any = {
    records: 10,
    cateId: 0,
    findWith: '',
  };

  cates: any;
  detailCates: any;

  listBlog: any;
  relateBlogs: any;

  //forms
  Editor = ClassicEditor;
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  ///create
  alertCreated:any;
  status:any;


  /// blog

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

  ngOnInit() {
    this.getList();
    this.getListCate();
    this.recommendBlogs();
  }

  getList() {
    this.blogService.getList(this.filter).subscribe((data) => {
      this.listBlog = data.data;
      console.log(this.listBlog);
    });
  }

  getMore() {
    this.filter.records += 10;
    this.getList();
  }

  getListCate() {
    this.blogService.getCate().subscribe((data) => {
      this.cates = data.cates;
      this.detailCates = data.detailCates;
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
    this.filter.records = 5;
    this.blogService.getList(this.filter).subscribe((data) => {
      this.relateBlogs = data.data;
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
        this.imageUrl = data.fileurl;
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
      this.blog.AnhMinhHoa = this.imageUrl;
      this.blog.NoiDung = this.ckeditorData;

      this.blogService.create(this.blog).subscribe((data) => {
        this.alertCreated = data.data;
        if(this.alertCreated ){
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
}
