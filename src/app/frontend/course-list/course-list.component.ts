import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/frontend/category/category.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [
    './course-list.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class CourseListComponent {
  constructor(
    private cateSer: CategoryService,
    private route: ActivatedRoute
  ) {}

  courses: any;
  id: any;
  type: any;
  filter: any;

  p:any =1;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.type = routeParams.get('type');
    this.filter = {
      id: this.id,
      type: this.type,
    };
    this.getList();
  }

  getList() {
    this.cateSer.getListCourses(this.filter).subscribe((data) => {
      this.courses = data.data;
    });
  }
}
