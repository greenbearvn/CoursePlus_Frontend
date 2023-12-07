import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: [
    './blogdetail.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class BlogdetailComponent {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  blogDetail: any;
  id: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.getDetail();
  }

  getDetail() {
    this.blogService.detail(this.id).subscribe((data) => {
      this.blogDetail = data.data;
      console.log(this.blogDetail);
    });
  }
}
