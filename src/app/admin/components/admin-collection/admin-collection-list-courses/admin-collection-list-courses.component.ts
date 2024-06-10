import { Component } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { Course } from 'src/app/Models/Course';
import { CollectionService } from 'src/app/services/admin/collection/collection.service';
@Component({
  selector: 'app-admin-collection-list-courses',
  templateUrl: './admin-collection-list-courses.component.html',
  styleUrls: [
    './admin-collection-list-courses.component.css'
  ],
})
export class AdminCollectionListCoursesComponent {
  constructor(private khoahocService: KhoahocService,private route: ActivatedRoute,private collectionService:CollectionService) {}

  lists: any;
  searchData: any;
  token: any = '';
  p: any = 1;

  faPlus: any = faPlus;

  listAdd: any = [];

  id:any;


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('id');


    this.getLists();
  }

  getLists() {
    this.collectionService.listCourse(this.id).subscribe((data:any) => {
      this.lists = data;
      console.log(this.lists);
    });
  }

  addCourse(course: Course) {
    if (!this.listAdd) {
      this.listAdd = [];
    }

    const result = this.listAdd.filter((item: any) => item.id === course.courseId);
    if (result.length != 0) {
      alert('Khoa hoc da ton tai');
    } else {
      this.listAdd.push(course);
      console.log(this.listAdd);
      alert('Thêm thành công khóa học ' + course.courseId);
    }
  }
}
