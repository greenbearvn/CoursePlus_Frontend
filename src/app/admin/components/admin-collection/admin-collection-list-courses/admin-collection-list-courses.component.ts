import { Component } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { KhoaHoc } from 'src/app/Models/khoahoc';

@Component({
  selector: 'app-admin-collection-list-courses',
  templateUrl: './admin-collection-list-courses.component.html',
  styleUrls: [
    './admin-collection-list-courses.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/dataTables.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/buttons.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/select.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/fixedHeader.bootstrap4.css',
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

  khoahoc: KhoaHoc = {
    id: 0,
    TenKhoaHoc: '',
    AnhKhoaHoc: '',
    MoTaNgan: '',
    MoTaDayDu: '',
    ThoiGian: '',
    ThoiLuongKhoaHoc: '',
    GiaCu: 0,
    GiamGia: 0,
    TrangThai: 0,
    MaCapDo: 0,
    MaGiangVien: 0,
    MaDanhMuc: 0,
  };

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.khoahocService.lists(this.token).subscribe((data) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

  addCourse(course: KhoaHoc) {
    if (!this.listAdd) {
      this.listAdd = [];
    }

    const result = this.listAdd.filter((item: any) => item.id === course.id);
    if (result.length != 0) {
      alert('Khoa hoc da ton tai');
    } else {
      this.listAdd.push(course);
      console.log(this.listAdd);
      alert('Thêm thành công khóa học ' + course.id);
    }
  }
}
