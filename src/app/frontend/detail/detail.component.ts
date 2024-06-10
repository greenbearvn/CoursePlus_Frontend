import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';
import { DetailCourse } from 'src/app/Models/frontend/detail';
import { CourseData } from 'src/app/Models/frontend/CourseData';
import { Video } from 'src/app/Models/frontend/Video';
import { Test } from 'src/app/Models/frontend/Test';
import { CollectionService } from 'src/app/services/frontend/collection/collection.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', '../css/style.css'],
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private cartService: CartService,
    private _toastService: ToastService,
    private router: Router,
    private collectionService: CollectionService,
    private userSer: AccountService
  ) {}

  id: any;

  isAddCart: any = false;
  lessions: any;
  videos: any;
  tests: any;
  teacher: any;
  comments: any;
  recommends: any;
  bought: any;
  existed: any;

  collection: any;

  user: any = {
    userId: 0,
    userName: '',
    email: '',
    role: '',
  };

  detailCollection: any;

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

  posts: any;

  ////////////////////////
  cart: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));

    this.getDetailCourse();
    if (this.id > 0) {
      this.getUser();
    }
  }

  getDetailCourse() {
    this.detailService.getDetail(this.id).subscribe((data) => {
      this.course = data;
      this.lessions = data.lessionRes;
      this.getTeacher(data.courses.profileId);

      this.getAllVideosOfCourse(data, this.id);
      this.getAllTestsOfCourse(data);
      console.log(this.course);
      console.log(this.lessions);
    });
  }

  getAllVideosOfCourse(course: CourseData, courseId: number) {
    // Tạo mảng rỗng để lưu trữ tất cả các video của khóa học
    const allVideos: Video[] = [];

    // Lặp qua tất cả các bài học của khóa học
    for (const lesson of course.lessionRes) {
      // Nếu courseId của bài học khớp với courseId được cung cấp
      if (lesson.courseId === courseId) {
        // Thêm tất cả các video của bài học vào mảng allVideos
        allVideos.push(...lesson.videos);
      }
    }

    // Trả về mảng chứa tất cả các video của khóa học
    this.videos = allVideos;

    console.log(this.videos);
  }
  getAllTestsOfCourse(courseData: CourseData) {
    const allTests: Test[] = [];

    // Iterate through each lesson
    courseData.lessionRes.forEach((lesson) => {
      // Iterate through each video in the lesson
      lesson.videos.forEach((video) => {
        // Concatenate the tests of the current video to allTests
        allTests.push(...video.tests);
      });
    });

    this.tests = allTests;
    console.log(this.tests);
  }

  getTeacher(id: number) {
    this.detailService.getTeachersOfCour(id).subscribe((data) => {
      this.teacher = data;
      console.log(this.teacher);
    });
  }

  getComments(id: number) {
    this.detailService.getAllComments(id).subscribe((data) => {
      this.comments = data.data;
      console.log(this.comments);
    });
  }

  getRecommendCourse(id: number) {
    this.detailService.getSameCourses(id).subscribe((data) => {
      this.recommends = data.data;
      console.log(this.recommends);
    });
  }

  /////
  getUser() {
    this.userSer.getUser().subscribe((data) => {
      this.user = data.user_current;

      console.log(this.user);

      this.getCollection();
    });
  }

  getCollection() {
    console.log('User: ', this.user);

    this.collectionService
      .getCollectionId(this.user.userId)
      .subscribe((data) => {
        this.collection = data;
        console.log(this.collection);

        this.checkBought();
      });
  }

  checkBought() {
    console.log('Collection: ', this.id, this.collection.collectionId);
    this.detailService
      .checkBought(this.collection.collectionId, this.id)
      .subscribe((data) => {
        this.detailCollection = data;
        console.log(this.detailCollection);
      });
  }

  addCart() {
    this.cart = {
      courseId: this.course.courses.courseId,
      courseName: this.course.courses.courseName,
      profileId: this.course.profile.profileId,
      profileName: this.course.profile.profileName,
      levelId: this.course.levels.idLevels,
      levelName: this.course.levels.nameLevel,
      newPrice: this.course.courses.newPrice,
      courseDuration: this.course.courses.courseDuration,
      courseThumbnail: this.course.courses.courseThumbnail,
      oldPrice: this.course.courses.oldPrice,
    };

    console.log(this.cart);

    this.cartService.addCart(this.cart).subscribe((data) => {
      if (data == true) {
        this._toastService.info('Đã thêm vào giỏ hàng thành công !!!');
      } else {
        this._toastService.warn('Đã tồn tại vào giỏ hàng !!!');
      }
    });
  }

  checkBoughtCourse(id: number) {
    this.detailService.checkBoughtCourse(id).subscribe((data) => {
      this.existed = data.data;
      console.log(this.existed);
    });
  }

  // checkBought(id: any, mavideo: any, mabbkt: any) {
  //   if (mavideo > 0) {
  //     this.detailService.checkBought(id).subscribe((data) => {
  //       this.bought = data.data;
  //       if (this.bought == true) {
  //         this.navigateToWatching(id, mavideo);
  //       } else {
  //         this._toastService.info('Vui lòng mua khóa học để xem video!!!');
  //       }
  //     });
  //   } else {
  //     this.detailService.checkBought(id).subscribe((data) => {
  //       this.bought = data.data;
  //       if (this.bought == true) {
  //         this.navigateToTest(mabbkt);
  //       } else {
  //         this._toastService.info('Vui lòng mua khóa học để kiểm tra!!!');
  //       }
  //     });
  //   }
  // }

  navigateToWatching(id: any, mavideo: any) {
    // this.router.navigateByUrl('/course/watching/detail/' + id + '/' + mavideo);
    window.location.href = '/course/watching/detail/' + id + '/' + mavideo
  }

  navigateToTest(id: any) {
    this.router.navigateByUrl('/video/test/' + id);
  }


}
