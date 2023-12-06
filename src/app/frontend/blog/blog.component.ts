import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';

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
  constructor(private blogService: BlogService) {}

  filter: any = {
    records: 10,
    cateId: 0,
    findWith: '',
  };

  cates: any;
  detailCates: any;

  listBlog: any;

  ngOnInit() {
    this.getList();
    this.getListCate();
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

  filterCate(id:number) {
    this.filter.findWith = 'dm';
    this.filter.cateId = id;

    this.getList();
  }

  filterDetailCate(id:number) {
    this.filter.findWith = 'ctdm';
    this.filter.cateId = id;
    
    this.getList();
  }
}
