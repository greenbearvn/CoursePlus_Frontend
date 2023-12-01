import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { Cart } from 'src/app/Models/cart';

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
    private cartService: CartService
  ) {}

  detail: any;
  isAddCart: any = false;
  lessions: any;
  videos: any;
  tests:any;
  teacher:any;
  comments:any;
  recommends:any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.getDetailCourse(id);
    this.getListLessionsOfCours(id);
    this.getListVideoOfCours(id);

    this.getTests(id);
    this.getTeacher(id);
    this.getComments(id)

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

  getComments(id:number) {
    this.detailService.getAllComments(id).subscribe((data) => {
      this.comments = data.data;
      console.log(this.comments);
    });
  }

  getRecommendCourse(id:number) {
    this.detailService.getRecommendCourses(id).subscribe((data) => {
      this.recommends = data.data;
      console.log(this.recommends);
    });
  }

  addCart(cart: Cart) {
    this.cartService.addCart(cart).subscribe((data) => {
      this.isAddCart = data.data;
      alert(this.isAddCart);
    });
  }
}
