import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { TestService } from 'src/app/services/admin/test/test.service';
import { test } from 'src/app/Models/admin/test';
import { ActivatedRoute } from '@angular/router';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { CourseData } from 'src/app/Models/frontend/CourseData';
import { Video } from 'src/app/Models/frontend/Video';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-test-list',
  templateUrl: './admin-test-list.component.html',
  styleUrls: ['./admin-test-list.component.css'],
})
export class AdminTestListComponent {
  constructor(
    private _toastService: ToastService,
    private testService: TestService,
    private route: ActivatedRoute,
    private khoahocService: KhoahocService
  ) {}

  lists: any;
  p: number = 1;
  searchData: any = '';

  videos: any;
  MaGiangVien: any;
  course: CourseData = {
    courses: {
      courseId: 0,
      courseName: '',
      courseThumbnail: '',
      shortDes: '',
      fullDes: '',
      timePublished: '',
      courseDuration: '',
      newPrice: 0,
      oldPrice: 0,
      percentSale: 0,
      status: 0,
      profileId: 0,
      idLevel: 0,
      idDetailCate: 0,
    },
    profile: {
      profileId: 0,
      profileName: '',
      email: '',
      phoneNumber: '',
      avatar: '',
      desciption: '',
      cateId: 0,
      isTeacher: 0,
    },
    levels: {
      idLevels: 0,
      nameLevel: '',
    },
    detailCate: {
      detailCateId: 0,
      detailCateName: '',
      cateId: 0,
    },
    lessionRes: [],
  };

  //font awesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaGiangVien = Number(routeParams.get('id'));

    // this.getUserInSession();
    // this.getLists();

    if (this.MaGiangVien > 0) {
      this.getTestsByProfileId();
      this.getCoursesOfProfileId();
    } else {
      this.getLists();
    }
  }

  getLists() {
    this.testService.list().subscribe((data) => {
      this.lists = data;
      console.log(this.lists);
    });
  }

  getTestsByProfileId() {
    this.testService.getAllTestByTeacher(this.MaGiangVien).subscribe((data) => {
      this.lists = data;

      console.log(this.lists);
    });
  }

  getCoursesOfProfileId() {
    this.khoahocService
      .getAllByProfileId(this.MaGiangVien)
      .subscribe((data) => {
        this.course = data;

        console.log(this.course);
        this.getAllVideosOfCourse(this.course);
      });
  }

  getAllVideosOfCourse(courseData: CourseData) {
    const allVideos: Video[] = [];

    // Iterate through each lesson
    courseData.lessionRes.forEach((lesson) => {
      // Iterate through each video in the lesson
      lesson.videos.forEach((video) => {
        allVideos.push(video);
      });
    });

    this.videos = allVideos;
    console.log(this.videos);
  }

  deleteItem(id: any) {
    this.testService.delete(id).subscribe((data) => {
      if (data == true) {
        this._toastService.info('Đã xóa thành công');
        this.getLists();
      } else {
        this._toastService.error('Đã xảy ra lỗi');
      }
    });
  }

  deleteButton(id: any) {
    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Một khi bạn xóa, bạn sẽ không thể khôi phục lại thông tin này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa đi!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(id);
      }
    });
  }
}
