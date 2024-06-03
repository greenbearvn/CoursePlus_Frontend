import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: [
    './blogdetail.component.css','../css/style.css'
  ],
})
export class BlogdetailComponent {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  blogDetail: any;
  id: any;

  recommendBlogs:any;

  hotBlogs:any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.getDetail();
  }

  getDetail() {
    this.blogService.getDetail(this.id).subscribe((data) => {
      this.blogDetail = data;
      this.getRecommendBlogs(this.blogDetail.cateid);
      
    });
  }

  getRecommendBlogs(categoryId:any){
    this.blogService.getRecommendBlogs(categoryId).subscribe((data) => {
      this.recommendBlogs = data;
      console.log(this.recommendBlogs);
    });
  }

  getHotBlogs(){
    this.blogService.getList().subscribe((data) => {
      this.hotBlogs = data;
      console.log(this.hotBlogs);
    });
  }
}
