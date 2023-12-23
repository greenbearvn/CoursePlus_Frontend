import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css',
    './css/icon.css',
    './css/uikit.css',
    './css/tailwin.css',
  ],
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private cartService: CartService,
    private _toastService: ToastService,
    private router: Router
  ) {}

  detail: any;
  isAddCart: any = false;
  lessions: any;
  videos: any;
  tests: any;
  teacher: any;
  comments: any;
  recommends: any;
  bought: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.getDetailCourse(id);
    this.getListLessionsOfCours(id);
    this.getListVideoOfCours(id);

    this.getTests(id);
    this.getTeacher(id);
    this.getComments(id);
  }

  getDetailCourse(id: number) {
    this.detailService.getDetail(id).subscribe((data) => {
      this.detail = data.data;
      console.log(this.detail);
    });
  }

  getListLessionsOfCours(id: number) {
    this.detailService.getLessions(id).subscribe((data) => {
      this.lessions = data.data;
      console.log(this.lessions);
    });
  }

  getListVideoOfCours(id: number) {
    this.detailService.getVideos(id).subscribe((data) => {
      this.videos = data.data;
      console.log(this.videos);
    });
  }

  getTests(id: number) {
    this.detailService.getListQuestions(id).subscribe((data) => {
      this.tests = data.data;
      console.log(this.tests);
    });
  }

  getTeacher(id: number) {
    this.detailService.getTeachersOfCour(id).subscribe((data) => {
      this.teacher = data.data;
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
    this.detailService.getRecommendCourses(id).subscribe((data) => {
      this.recommends = data.data;
      console.log(this.recommends);
    });
  }

  addCart(cart: any) {
    this.cartService.addCart(cart).subscribe((data) => {
      this.isAddCart = data.data;
      if (this.isAddCart) {
        this._toastService.info('Đã thêm vào giỏ hàng thành công !!!');
        window.location.reload();
      } else {
        this._toastService.warn('Đã tồn tại vào giỏ hàng !!!');
        window.location.reload();
      }
    });
  }

  checkBought(id: any, mavideo: any) {
    this.detailService.checkBought(id).subscribe((data) => {
      this.bought = data.data;
      if (this.bought == true) {
        this.navigateToWatching(id, mavideo);
      } else {
        this._toastService.info('Vui lòng mua khóa học để kiểm tra!!!');
      }
    });
  }
  
  navigateToWatching(id: any, mavideo: any) {
    this.router.navigateByUrl('/course/watching/detail/' + id + '/' + mavideo);
  }
}
