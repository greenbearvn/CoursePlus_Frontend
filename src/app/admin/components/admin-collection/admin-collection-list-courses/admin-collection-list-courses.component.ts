import { Component } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { Course } from 'src/app/Models/Course';

@Component({
  selector: 'app-admin-collection-list-courses',
  templateUrl: './admin-collection-list-courses.component.html',
  styleUrls: [
    './admin-collection-list-courses.component.css'
  ],
})
export class AdminCollectionListCoursesComponent {
  constructor(private khoahocService: KhoahocService) {}

  lists: any;
  searchData: any;
  token: any = '';
  p: any = 1;

  faPlus: any = faPlus;

  listAdd: any = [];

  // khoahoc: Course = {
  //   id: 0,
  //   TenKhoaHoc: '',
  //   AnhKhoaHoc: '',
  //   MoTaNgan: '',
  //   MoTaDayDu: '',
  //   ThoiGian: '',
  //   ThoiLuongKhoaHoc: '',
  //   GiaCu: 0,
  //   GiamGia: 0,
  //   TrangThai: 0,
  //   MaCapDo: 0,
  //   MaGiangVien: 0,
  //   MaDanhMuc: 0,
  // };

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.khoahocService.getProducts().subscribe((data:any) => {
      this.lists = data.data;
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
