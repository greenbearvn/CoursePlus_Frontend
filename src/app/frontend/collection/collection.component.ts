import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/frontend/collection/collection.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';
import { nguoidung } from 'src/app/Models/nguoidung';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: [
    './collection.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class CollectionComponent {
  constructor(
    private colService: CollectionService,
    private accService: AccountService,
    private blogService: BlogService
  ) {}

  filter: any = {
    userID: 0,
    cateId: 0,
    findWith: '',
  };

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  cates: any;
  detailCates: any;

  listCollections: any;

  ngOnInit() {
    this.getListCate();
    this.getUser();
    
  }

  getUser() {
    this.accService.getUser().subscribe((data) => {
      this.user = data.data;
      
      this.getList();
    });
  }

  getList() {
    this.filter.userID = this.user.MaNguoiDung;
    this.colService.getListCollection(this.filter).subscribe((data) => {
      this.listCollections = data.data;
      console.log(this.listCollections);
    });
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
}
